import {Action, bindActionCreators, Dispatch} from 'redux';

import {actions as playerActions} from 'core/player';
import {actions as storageActions} from 'core/storage';
import {actions as tracksActions} from 'core/tracks';
import {RootState} from 'src/core';

type OwnProps = {
  entity: string;
  id: string;
};
export const mapStateToProps = ({tracks, player, playlists}: RootState, ownProps: OwnProps) => ({
  player,
  tracks,
  playlist: playlists.data && playlists.data[ownProps.id],
  ...ownProps,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  actions: bindActionCreators(
    {
      play: playerActions.playMusic,
      subscribeToTracks: tracksActions.subscribeToPlaylistTracks,
      unsubscribeFromTracks: tracksActions.unsubscribeFromPlaylistTracks,
      saveMusic: storageActions.saveMusic,
      deleteMusic: storageActions.deleteMusic,
      setList: playerActions.setList,
      toggle: playerActions.toggle,
    },
    dispatch,
  ),
});

export type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>;
export type MapStateToProps = ReturnType<typeof mapStateToProps>;

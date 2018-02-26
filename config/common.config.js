import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ManifestPlugin from 'webpack-manifest-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';

export const plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.LoaderOptionsPlugin({
		options: {
			context: __dirname,
			postcss: [autoprefixer]
		},
		minimize: true,
		debug: false
	}),
	new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
	new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(ENV)}),
	new ManifestPlugin({fileName: 'asset-manifest.json'})
];
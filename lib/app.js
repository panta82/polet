var _ = require('./tools');

var DEFAULT_OPTIONS = exports.DEFAULT_OPTIONS = {
	// Prefix to the feature module name
	featurePrefix: "feature-",

	// List of directories where to lookup feature modules
	lookup: undefined,

	// List of features. Can take:
	// - strings (in which case it does module loading from one of the "lookup" dirs),
	// - functions (which are treated as features with single "init" method)
	// - objects with detailed options
	features: undefined
};

function App(options) {
	options = _.merge(DEFAULT_OPTIONS, options);

	var _features = options.features || [];

	function feature(f, opts) {

	}

	function resolveFeature(f, opts) {

	}
}

wp.hooks.addFilter(
	"editor.PostPreview.interstitialMarkup",
	"myplugin/preview",
	function () {
		return ``
	},
)

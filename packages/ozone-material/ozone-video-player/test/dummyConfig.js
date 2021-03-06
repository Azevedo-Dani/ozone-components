
export const OzoneFormat = {
	'type': {
		'hls': 'org.taktik.filetype.video.hls',
		'flowr': 'org.taktik.filetype.flowr.video',
		'mp4': 'org.taktik.filetype.video.mp4',
		'mp3': 'org.taktik.filetype.audio.mp3',
		'original': 'org.taktik.filetype.original',
		'jpg': 'org.taktik.filetype.image.preview.{SIZE}',
		'png': 'org.taktik.filetype.image.preview.{SIZE}'
	},
	'priority': {
		'video': ['hls', 'flowr', 'original', 'mp4'],
		'audio': ['hls', 'flowr', 'mp4', 'mp3', 'original']
	}
}

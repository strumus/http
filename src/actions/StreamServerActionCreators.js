import StreamDispatcher from '../dispatchers/StreamDispatcher';
import StreamConstants from '../constants/StreamConstants';

var StreamActionTypes = StreamConstants;

export default {
	create: function(title) {
		StreamDispatcher.dispatch({
			type: StreamActionTypes.STREAM_CREATE,
			title: title
		});
	},
	receiveAll: function(rawStreams) {
		StreamDispatcher.dispatch({
			type: StreamActionTypes.RECEIVE_RAW_STREAMS,
			rawStreams: rawStreams
		})
	},
	receiveNewStream: function(rawStream) {
		StreamDispatcher.dispatch({
			type: StreamActionTypes.RECEIVE_RAW_STREAM,
			rawStream: rawStream
		})
	}
} 
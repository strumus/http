import StreamDispatcher from '../dispatchers/StreamDispatcher';
import { EventEmitter } from 'events';
import StreamConstants from '../constants/StreamConstants';

const CHANGE_EVENT = 'change';

var _streams = {};

function create(title) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _streams[id] = {
        id: id,
        title: title
    };
}

function addStreams(rawStreams) {
    rawStreams.forEach(function (stream) {
        create(stream.title);
    });
}

class StreamStore extends EventEmitter {
    getAll() {
        return _streams;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
};

var store = new StreamStore();

store.dispatchToken = StreamDispatcher.register(function (action) {
    var title;

    switch (action.type) {
        case StreamConstants.STREAM_CREATE:
            title = action.title.trim();

            if (title !== '') {
                create(title);
                store.emitChange();
            }
            break;
        case StreamConstants.RECEIVE_RAW_STREAMS:
            addStreams(action.rawStreams);
            store.emitChange();
            break;
    }
});

export default store;
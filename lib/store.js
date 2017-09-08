import fortune from 'fortune';
import nedbAdapter from 'fortune-nedb';
import path from 'path';

const recordTypes = {
  building: {
    name: { type: String },
  },
};

const adapterOptions = {
  dbPath: path.join(__dirname, '..', 'db'),
};

const store = fortune(recordTypes, {
  adapter: [nedbAdapter, adapterOptions],
});

module.exports = store;

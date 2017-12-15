function requireAll(r) { r.keys().forEach(r); }

requireAll(require.context('./scripts/', true, /\.js$/));
requireAll(require.context('./plugins/', true, /\.js$/));
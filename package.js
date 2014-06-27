Package.describe({
  summary: 'Format Moment Duration objects.'
});

Package.on_use(function (api) {
  where = where || ['client', 'server'];
  api.use("moment", where);
  api.use("underscore", where);
  if (api.imply) {
    api.imply("moment", where);
    api.imply("underscore", where);
  }
  api.add_files('lib/moment-duration-format/lib/moment-duration-format.js', where);
  if (api.export) {
    api.export('MomentDurationFormat');
  }
});


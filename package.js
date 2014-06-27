Package.describe({
  summary: 'Format Moment Duration objects.'
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.use("underscore", where);
  api.use("moment", where);

  if (api.imply) {
    api.imply("underscore", where);
    api.imply("moment", where);
  }

  api.add_files(['compatibility.js', 'lib/moment-duration-format/lib/moment-duration-format.js'], where);

  if (api.export) {

  }
});


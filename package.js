Package.describe({
  summary: 'Format Moment Duration objects.',
  version: "1.3.1",
  git: "https://github.com/wizonesolutions/meteor-moment-duration-format.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  where = where || ['client', 'server'];
  api.use("underscore", where);
  api.use("momentjs:moment", where);

  if (api.imply) {
    api.imply("underscore", where);
    api.imply("momentjs:moment", where);
  }

  api.add_files(['compatibility.js', 'lib/moment-duration-format/lib/moment-duration-format.js'], where);

  if (api.export) {

  }
});


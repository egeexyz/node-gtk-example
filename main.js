const gi = require("node-gtk");

const Gtk = gi.require("Gtk", "3.0");

gi.startLoop();
Gtk.init();

const header = new Gtk.HeaderBar();
const win = new Gtk.Window();

header.setTitle("Test!");
header.setSubtitle("Subtitle test");
header.setShowCloseButton(true);

win.on("destroy", () => Gtk.mainQuit());
win.on("delete-event", () => false);

win.setDefaultSize(350, 70);
win.setTitlebar(header);
win.borderWidth = 10;

win.setDefaultSize(200, 80);
// win.add(new Gtk.Button.withLabel("Hello Vala"));
win.add(new Gtk.Label({ label: "Hello Gtk+" }));

win.showAll();
Gtk.main();

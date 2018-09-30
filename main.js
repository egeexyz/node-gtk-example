const gi = require("node-gtk");

const Gtk = gi.require("Gtk", "3.0");

gi.startLoop();
Gtk.init();

const header = new Gtk.HeaderBar();
header.setTitle("Node-GTK");
header.setSubtitle("A test for node-gtk")
header.setShowCloseButton(true);

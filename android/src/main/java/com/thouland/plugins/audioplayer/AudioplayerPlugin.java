package com.thouland.plugins.audioplayer;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Audioplayer")
public class AudioplayerPlugin extends Plugin implements onCompletedListener {

    private Audioplayer implementation = new Audioplayer();

    @PluginMethod
    public String start(PluginCall call) {

        String value = call.getString("value");
        JSObject ret = new JSObject();
        implementation.setup(this);
        ret.put("value", implementation.start(call,value));
        call.resolve(ret);

        return "yes";
    }


    @PluginMethod
    public String pause(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.pause());
        call.resolve(ret);
        return "yes";
    }

    @PluginMethod
    public String stop(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.stop());
        call.resolve(ret);
        return "yes";
    }



    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @Override
    public void onCompleted() {
        notifyListeners("nextSong", null);
    }
}

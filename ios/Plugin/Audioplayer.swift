import Foundation
import UIKit
import AVFoundation

@objc public class Audioplayer: NSObject {
   var player:AVPlayer
    var despPlugin:AudioplayerPlugin
    
    init(player:AVPlayer,despPlugin:AudioplayerPlugin) {
        self.player = player
        self.despPlugin = despPlugin
    }
    
    @objc func playerDidFinishPlaying(note: NSNotification) {
        print("Video Finished")
        despPlugin.onCompleted()
    }
    
    public func setup(value: AudioplayerPlugin){
        despPlugin = value
     }
   public func start(value: String) -> String {
        let playItem = AVPlayerItem(url: URL(string: value)!)
        player = AVPlayer(playerItem: playItem)
        player.play()
    NotificationCenter.default.addObserver(self, selector:#selector(playerDidFinishPlaying),
                                               name: NSNotification.Name.AVPlayerItemDidPlayToEndTime, object: player.currentItem)
        return "yes"
    }
    public func pause() -> String {
        player.pause()
        return "yes"
    }
    
    public func stop() -> String {
        player.pause()
        player.rate=0
        NotificationCenter.default.removeObserver(self)
        return "yes"
    }

    public func echo(_ value: String) -> String {
        return value
    }

}

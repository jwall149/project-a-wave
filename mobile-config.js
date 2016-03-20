var packageName = 'me.tonny.project-a-wave';
var appName     = 'Project A Wave'

App.info({
  id: packageName,
  name: appName,
  description: 'Concentration just became that much easier',
  author: 'AWave team',
  email: 'its@tonny.me',
  website: 'http://www.hackathon.io/project-a5',
  version: '0.1.0'
});


App.icons({
  // iOS
  'iphone': 'resources/ios/Icon.png',
  'iphone_2x': 'resources/ios/Icon@2x.png',
  'iphone_3x': 'resources/ios/Icon@2x.png',
  'ipad': 'resources/ios/Icon-72.png',
  'ipad_2x': 'resources/ios/Icon-72@2x.png',

  // Android
  'android_ldpi': 'resources/android/ic_launcher_brainparts/drawable-ldpi/ic_launcher_brainparts.png',
  'android_mdpi': 'resources/android/ic_launcher_brainparts/drawable-mdpi/ic_launcher_brainparts.png',
  'android_hdpi': 'resources/android/ic_launcher_brainparts/drawable-hdpi/ic_launcher_brainparts.png',
  'android_xhdpi': 'resources/android/ic_launcher_brainparts/drawable-xhdpi/ic_launcher_brainparts.png'

});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/iOS/Resources/splash/Default.png',
  'iphone_2x': 'resources/splash/iOS/Resources/splash/Default-568h@2x~iphone_640x1136.png',
  'iphone5': 'resources/splash/iOS/Resources/splash/Default-568h@2x~iphone_640x1136.png',
  'iphone6': 'resources/splash/iOS/Resources/splash/Default-750@2x~iphone6-landscape_1334x750.png',
  'iphone6p_portrait':'resources/splash/iOS/Resources/splash/Default-1242@3x~iphone6s-portrait_1242x2208.png',
  'iphone6p_landscape': 'resources/splash/iOS/Resources/splash/Default-1242@3x~iphone6s-landscape_2208x1242.png',

  // Android
  'android_ldpi_portrait': 'resources/splash/Android/res/drawable-ldpi/screen.png',
  'android_ldpi_landscape': 'resources/splash/Android/res/drawable-land-ldpi/screen.png',
  'android_mdpi_portrait': 'resources/splash/Android/res/drawable-mdpi/screen.png',
  'android_mdpi_landscape': 'resources/splash/Android/res/drawable-land-mdpi/screen.png',
  'android_hdpi_portrait': 'resources/splash/Android/res/drawable-hdpi/screen.png',
  'android_hdpi_landscape': 'resources/splash/Android/res/drawable-land-mdpi/screen.png',
  'android_xhdpi_portrait': 'resources/splash/Android/res/drawable-xhdpi/screen.png',
  'android_xhdpi_landscape': 'resources/splash/Android/res/drawable-land-xhdpi/screen.png'

});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('AllowInlineMediaPlayback', 'true');
App.setPreference('MediaPlaybackRequiresUserAction', 'false');

App.setPreference('Orientation', 'portrait');
App.setPreference('fullscreen', 'true');
App.setPreference('deployment-target', '7.1');

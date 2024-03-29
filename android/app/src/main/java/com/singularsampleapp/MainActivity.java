package com.singularsampleapp;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import net.singular.react_native.SingularBridgeModule;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SingularSampleApp";
  }

  @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);

    // Handling Singular links
    // This is important to add in order to get Singular Links to work
    SingularBridgeModule.onNewIntent(intent);
  }
}


import { expect } from 'chai';
import NativeModules from '../src/NativeModules';
import sinon from 'sinon';
import { expectSpy } from './test-utils';

describe('Native Modules', function () {
  it('Should be defined', function () {
    expect(require('NativeModules')).to.deep.equal(NativeModules);  // eslint-disable-line import/no-unresolved
    expect(NativeModules).to.be.an('object');
  });

  it('should be requirable', function () {
    Object.keys(NativeModules).forEach(function (mod) {
      expect(require(mod)).to.deep.equal(NativeModules[mod]);
    });
  });

  describe('Specific Modules', function () {
    describe('AlertManager', function () {
      it('should have alertWithArgs as spy', function () {
        expectSpy(NativeModules.AlertManager.alertWithArgs);
      });
    });

    describe('AppState', function () {
      it('should have addEventListener as spy', function () {
        expectSpy(NativeModules.AppState.addEventListener);
      });
    });

    describe('AsyncLocalStorage', function () {
      it('should have clear as spy', function () {
        expectSpy(NativeModules.AsyncLocalStorage.clear);
      });

      it('should have getItem as spy', function () {
        expectSpy(NativeModules.AsyncLocalStorage.getItem);
      });

      it('should have removeItem as spy', function () {
        expectSpy(NativeModules.AsyncLocalStorage.removeItem);
      });

      it('should have setItem as spy', function () {
        expectSpy(NativeModules.AsyncLocalStorage.setItem);
      });
    });

    describe('BuildInfo', function () {
      it('should have version keys', function () {
        expect(NativeModules.BuildInfo.appVersion).to.equal('0');
        expect(NativeModules.BuildInfo.buildVersion).to.equal('0');
      });
    });

    describe('Clipboard', function () {
      it('should have setString as spy', function () {
        expectSpy(NativeModules.Clipboard.setString);
      });
    });

    describe('DataManager', function () {
      it('should have queryData as spy', function () {
        expectSpy(NativeModules.DataManager.queryData);
      });
    });

    describe('FacebookSDK', function () {
      it('should have login as spy', function () {
        expectSpy(NativeModules.FacebookSDK.login);
      });

      it('should have logout as spy', function () {
        expectSpy(NativeModules.FacebookSDK.logout);
      });

      it('should have queryGraphPath as spy', function () {
        expectSpy(NativeModules.FacebookSDK.queryGraphPath);
        const callback = sinon.spy();
        NativeModules.FacebookSDK.queryGraphPath('', '', '', callback);
        expect(NativeModules.FacebookSDK.queryGraphPath).to.have.been.calledOnce;
        expect(callback).to.have.been.calledOnce;
      });
    });

    describe('FbRelayNativeAdapter', function () {
      it('should have updateCLC as spy', function () {
        expectSpy(NativeModules.FbRelayNativeAdapter.updateCLC);
      });
    });

    describe('GraphPhotoUpload', function () {
      it('should have upload as spy', function () {
        expectSpy(NativeModules.GraphPhotoUpload.upload);
      });
    });

    describe('I18n', function () {
      it('should have translation dict', function () {
        expect(NativeModules.I18n.translationsDictionary).to.be.a('string');
        const dict = JSON.parse(NativeModules.I18n.translationsDictionary);
        expect(Object.keys(dict)).to.have.lengthOf(1);
      });
    });

    describe('ImageLoader', function () {
      it('should have getSize as spy', function (done) {
        expectSpy(NativeModules.ImageLoader.getSize);
        const callback = sinon.spy(function () {
          expect(callback).to.have.been.calledWith(320, 240);
          done();
        });
        NativeModules.ImageLoader.getSize('', callback);
        expect(NativeModules.ImageLoader.getSize).to.have.been.calledOnce;
      });

      it('should have prefetchImage as spy', function () {
        expectSpy(NativeModules.ImageLoader.prefetchImage);
      });
    });

    describe('ImageViewManager', function () {
      it('should have getSize as spy', function (done) {
        expectSpy(NativeModules.ImageViewManager.getSize);
        const callback = sinon.spy(function () {
          expect(callback).to.have.been.calledWith(320, 240);
          done();
        });
        NativeModules.ImageViewManager.getSize('', callback);
        expect(NativeModules.ImageViewManager.getSize).to.have.been.calledOnce;
      });

      it('should have prefetchImage as spy', function () {
        expectSpy(NativeModules.ImageViewManager.prefetchImage);
      });
    });

    describe('KeyboardObserver', function () {
      it('should have addListener as spy', function () {
        expectSpy(NativeModules.KeyboardObserver.addListener);
      });

      it('should have removeListeners as spy', function () {
        expectSpy(NativeModules.KeyboardObserver.removeListeners);
      });
    });

    describe('ModalFullscreenViewManager', function () {
      it('should be empty', function () {
        expect(NativeModules.ModalFullscreenViewManager).to.be.an('object');
        expect(Object.keys(NativeModules.ModalFullscreenViewManager)).to.deep.equal([]);
      });
    });

    describe('Networking', function () {
      it('should have sendRequest as spy', function () {
        expectSpy(NativeModules.Networking.sendRequest);
      });

      it('should have abortRequest as spy', function () {
        expectSpy(NativeModules.Networking.abortRequest);
      });

      it('should have addListener as spy', function () {
        expectSpy(NativeModules.Networking.addListener);
      });

      it('should have removeListeners as spy', function () {
        expectSpy(NativeModules.Networking.removeListeners);
      });
    });

    describe('SourceCode', function () {
      it('should have null scriptUrl', function () {
        expect(NativeModules.SourceCode.scriptURL).to.be.null;
      });
    });

    describe('StatusBarManager', function () {
      it('should have setStyle as spy', function () {
        expectSpy(NativeModules.StatusBarManager.setStyle);
      });

      it('should have setHidden as spy', function () {
        expectSpy(NativeModules.StatusBarManager.setHidden);
      });

      it('should have setNetworkActivityIndicatorVisible as spy', function () {
        expectSpy(NativeModules.StatusBarManager.setNetworkActivityIndicatorVisible);
      });

      it('should have setBackgroundColor as spy', function () {
        expectSpy(NativeModules.StatusBarManager.setBackgroundColor);
      });

      it('should have setTranslucent as spy', function () {
        expectSpy(NativeModules.StatusBarManager.setTranslucent);
      });
    });

    describe('Timing', function () {
      it('should have createTimer as spy', function () {
        expectSpy(NativeModules.Timing.createTimer);
      });

      it('should have deleteTimer as spy', function () {
        expectSpy(NativeModules.Timing.deleteTimer);
      });
    });

    describe('UIManager', function () {
      it('should have customBubblingEventTypes as object', function () {
        expect(NativeModules.UIManager.customBubblingEventTypes).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.customBubblingEventTypes)).to.deep.equal([]);
      });

      it('should have customDirectEventTypes as object', function () {
        expect(NativeModules.UIManager.customDirectEventTypes).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.customDirectEventTypes)).to.deep.equal([]);
      });

      it('should have window dimensions', function () {
        expect(NativeModules.UIManager.Dimensions).to.be.an('object');
        expect(NativeModules.UIManager.Dimensions.window).to.deep.equal({
          fontScale: 2,
          height: 1334,
          scale: 2,
          width: 750
        });
      });

      it('should have ModalFullscreenView as object', function () {
        expect(NativeModules.UIManager.ModalFullscreenView).to.be.an('object');
        expect(NativeModules.UIManager.ModalFullscreenView.Constants).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.ModalFullscreenView.Constants)).to.deep.equal([]);
      });

      it('should have ScrollView as object', function () {
        expect(NativeModules.UIManager.ScrollView).to.be.an('object');
        expect(NativeModules.UIManager.ScrollView.Constants).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.ScrollView.Constants)).to.deep.equal([]);
      });

      it('should have View as object', function () {
        expect(NativeModules.UIManager.View).to.be.an('object');
        expect(NativeModules.UIManager.View.Constants).to.be.an('object');
        expect(Object.keys(NativeModules.UIManager.View.Constants)).to.deep.equal([]);
      });
    });

    describe('WebSocketModule', function () {
      it('should have connect as spy', function () {
        expectSpy(NativeModules.WebSocketModule.connect);
      });

      it('should have send as spy', function () {
        expectSpy(NativeModules.WebSocketModule.send);
      });

      it('should have sendBinary as spy', function () {
        expectSpy(NativeModules.WebSocketModule.sendBinary);
      });

      it('should have ping as spy', function () {
        expectSpy(NativeModules.WebSocketModule.ping);
      });

      it('should have close as spy', function () {
        expectSpy(NativeModules.WebSocketModule.close);
      });

      it('should have addListener as spy', function () {
        expectSpy(NativeModules.WebSocketModule.addListener);
      });

      it('should have removeListeners as spy', function () {
        expectSpy(NativeModules.WebSocketModule.removeListeners);
      });
    });

    describe('Platform', function () {
      it('should OS that returns valid OS', function () {
        expect(['ios', 'android']).to.include(NativeModules.Platform.OS);
      });

      it('should have Version as spy', function () {
        expectSpy(NativeModules.Platform.Version);
        expect(NativeModules.Platform.Version)
      });

      it('should have select as spy', function () {
        expectSpy(NativeModules.Platform.select);
        expect(NativeModules.Platform.select({ ios: 'ios', android: 'android' })).to.equal('ios')
      });
    });
  });
});
(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"borderRadius":0,"borderSize":0,"desktopMipmappingEnabled":false,"scrollBarMargin":2,"backgroundColorRatios":[0],"definitions": [{"toolTipShadowColor":"#333138","progressBarBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","borderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"subtitlesVerticalAlign":"bottom","subtitlesFontSize":"3vmin","subtitlesHorizontalAlign":"center","progressBarBorderColor":"#000000","toolTipBorderRadius":3,"subtitlesBottom":50,"subtitlesPaddingLeft":5,"paddingLeft":0,"data":{"name":"Main Viewer"},"surfaceReticleSelectionOpacity":1,"id":"MainViewer","progressBarBackgroundColorRatios":[0],"surfaceReticleSelectionColor":"#FFFFFF","width":"100%","subtitlesTextShadowOpacity":1,"toolTipOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"progressBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"paddingRight":0,"playbackBarLeft":0,"subtitlesTextShadowVerticalLength":1,"progressBackgroundColorDirection":"vertical","progressLeft":0,"toolTipPaddingBottom":4,"toolTipFontStyle":"normal","playbackBarHeadShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"vrPointerSelectionTime":2000,"subtitlesPaddingBottom":5,"subtitlesBorderSize":0,"subtitlesBorderColor":"#FFFFFF","progressBorderColor":"#000000","vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"playbackBarBackgroundOpacity":1,"height":"100%","transitionDuration":500,"playbackBarProgressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarBorderRadius":0,"subtitlesTextDecoration":"none","playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","toolTipFontWeight":"normal","translationTransitionDuration":1000,"subtitlesPaddingRight":5,"class":"ViewerArea","minHeight":50,"subtitlesTextShadowBlurRadius":0,"propagateClick":false,"playbackBarHeadOpacity":1,"playbackBarHeadShadow":true,"subtitlesTextShadowHorizontalLength":1,"minWidth":100,"toolTipBorderColor":"#767676","toolTipShadowSpread":0,"borderRadius":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressBarOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBackgroundColor":"#F6F6F6","paddingTop":0,"playbackBarHeadBorderColor":"#000000","playbackBarProgressOpacity":1,"paddingBottom":0,"progressBottom":0,"progressBackgroundColorRatios":[0],"playbackBarBottom":5,"playbackBarBorderSize":0,"subtitlesPaddingTop":5,"top":0,"toolTipTextShadowOpacity":0,"subtitlesShadow":false,"progressRight":0,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"subtitlesFontWeight":"normal","displayTooltipInTouchScreens":true,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":10,"doubleClickAction":"toggle_fullscreen","progressOpacity":1,"transitionMode":"blending","playbackBarHeight":10,"subtitlesTop":0,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","progressBorderSize":0,"subtitlesEnabled":true,"progressBarBorderRadius":0,"surfaceReticleOpacity":0.6,"playbackBarHeadWidth":6,"toolTipTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"toolTipFontFamily":"Arial","progressBarBorderSize":0,"toolTipPaddingTop":4,"toolTipBorderSize":1,"subtitlesGap":0,"left":0,"toolTipShadowOpacity":1,"shadow":false,"playbackBarRight":0,"toolTipShadowVerticalLength":0,"progressBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowColor":"#000000","subtitlesOpacity":1},{"id":"audio_40A83828_53E7_DF46_41B9_E2362F73EEC1","loop":false,"audio":"this.audiores_40615C76_53E7_F7CA_41D1_FB75BFFEB039","autoplay":true,"data":{"label":"Beckoning - Telecasted"},"class":"MediaAudio"},{"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"displayPlaybackBar":true,"class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","zoomEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","gyroscopeEnabled":true,"id":"MainViewerPanoramaPlayer"},{"id":"audio_71CFD265_60A1_8221_41AD_190B6AC28A42","loop":false,"audio":"this.audiores_71288BC9_60A1_8261_41D2_35640756D173","autoplay":true,"data":{"label":"V\u00eddeo sem t\u00edtulo \u2010 Feito com o Clipchamp (online-audio-converter.com)"},"class":"MediaAudio"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_camera","media":"this.panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_camera","media":"this.panorama_59162CBE_53AA_D0BA_41D1_F135F6222856","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList"},{"initialPosition":{"yaw":-2.28,"pitch":-8.76,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_429C2D40_53A6_F1C5_41D3_69531BC0FDC2","idleSequence":"this.sequence_429C2D40_53A6_F1C5_41D3_69531BC0FDC2","timeToIdle":2000,"id":"panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_camera","automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera"},{"displayOriginPosition":{"yaw":1.82,"stereographicFactor":1,"hfov":165,"pitch":-90,"class":"RotationalCameraDisplayPosition"},"idleSequence":"this.sequence_4212570F_53A6_515A_41C1_70617F16152E","timeToIdle":2000,"hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"yaw":1.82,"pitch":-4.25,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_4212570F_53A6_515A_41C1_70617F16152E","class":"PanoramaCamera","displayMovements":[{"easing":"linear","duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","duration":3000,"targetStereographicFactor":0,"targetPitch":-4.25,"class":"TargetRotationalCameraDisplayMovement"}],"id":"panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_camera"},{"hfov":360,"overlays":["this.overlay_5CF48051_53AA_EFC7_41C5_6DE99F677B3B"],"hfovMin":"135%","thumbnailUrl":"media/panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_t.jpg","pitch":0,"id":"panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221","partial":false,"hfovMax":130,"label":trans('panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221.label'),"adjacentPanoramas":[{"distance":2.55,"yaw":-112.49,"select":"this.overlay_5CF48051_53AA_EFC7_41C5_6DE99F677B3B.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_5CF48051_53AA_EFC7_41C5_6DE99F677B3B"},"backwardYaw":61.93,"panorama":"this.panorama_59162CBE_53AA_D0BA_41D1_F135F6222856","class":"AdjacentPanorama"}],"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_t.jpg","cube":{"levels":[{"width":12288,"colCount":24,"url":"media/panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"colCount":12,"url":"media/panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"colCount":6,"url":"media/panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"},{"width":9216,"colCount":6,"url":"media/panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","rowCount":1,"class":"TiledImageResourceLevel"},{"width":12288,"colCount":6,"url":"media/panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"data":{"label":"REV00_SALA_CONQUISTA_01_360"},"vfov":180},{"hfov":360,"overlays":["this.overlay_5CDC71F1_53BA_70C9_4183_5BB8195D5D04"],"hfovMin":"135%","thumbnailUrl":"media/panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_t.jpg","pitch":0,"id":"panorama_59162CBE_53AA_D0BA_41D1_F135F6222856","partial":false,"hfovMax":130,"label":trans('panorama_59162CBE_53AA_D0BA_41D1_F135F6222856.label'),"adjacentPanoramas":[{"distance":1.44,"yaw":61.93,"select":"this.overlay_5CDC71F1_53BA_70C9_4183_5BB8195D5D04.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_5CDC71F1_53BA_70C9_4183_5BB8195D5D04"},"backwardYaw":-112.49,"panorama":"this.panorama_5FBCA99D_53AA_B17F_41C7_B1D82459A221","class":"AdjacentPanorama"}],"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_t.jpg","cube":{"levels":[{"width":12288,"colCount":24,"url":"media/panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"colCount":12,"url":"media/panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"colCount":6,"url":"media/panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"},{"width":9216,"colCount":6,"url":"media/panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","rowCount":1,"class":"TiledImageResourceLevel"},{"width":12288,"colCount":6,"url":"media/panorama_59162CBE_53AA_D0BA_41D1_F135F6222856_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"data":{"label":"REV00_SALA_CONQUISTA_02_360"},"vfov":180},{"class":"AudioResource","mp3Url":trans('audiores_40615C76_53E7_F7CA_41D1_FB75BFFEB039.mp3Url'),"id":"audiores_40615C76_53E7_F7CA_41D1_FB75BFFEB039"},{"class":"AudioResource","mp3Url":trans('audiores_71288BC9_60A1_8261_41D2_35640756D173.mp3Url'),"id":"audiores_71288BC9_60A1_8261_41D2_35640756D173"},{"restartMovementOnUserInteraction":true,"restartMovementDelay":2000,"movements":[{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-8.01,"targetYaw":23.08,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-8.45,"targetYaw":57.36,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-8.45,"targetYaw":121.1,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-12.85,"targetYaw":151.87,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","targetPitch":-8.45,"pitchSpeed":38.45,"path":"shortest","yawSpeed":76.25,"targetHfov":90,"hfovSpeed":76.25,"targetYaw":-22.21,"class":"TargetPanoramaCameraMovement"}],"id":"sequence_429C2D40_53A6_F1C5_41D3_69531BC0FDC2","class":"PanoramaCameraSequence"},{"restartMovementOnUserInteraction":true,"restartMovementDelay":2000,"movements":[{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-4.5,"targetYaw":-33.18,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-3.62,"targetYaw":-65.29,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-1.42,"targetYaw":-143.97,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-2.74,"targetYaw":-172.08,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-4.5,"targetYaw":172.97,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-4.94,"targetYaw":123.74,"class":"TargetPanoramaCameraMovement"},{"easing":"cubic_in_out","pitchSpeed":17.05,"path":"shortest","yawSpeed":33.25,"targetPitch":-4.06,"targetYaw":79.78,"class":"TargetPanoramaCameraMovement"}],"id":"sequence_4212570F_53A6_515A_41C1_70617F16152E","class":"PanoramaCameraSequence"},{"enabledInCardboard":true,"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToRev00_sala_conquista_02_360"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_666EC388_6DD3_A02F_41A8_1D00BE3701D7","distance":100,"yaw":-112.49,"pitch":-33.67,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"GoToRev00_sala_conquista_02_360"},"roll":-13.2,"verticalAlign":"middle","horizontalAlign":"center","hfov":10.5,"vfov":5.5}],"areas":["this.HotspotPanoramaOverlayArea_5C11307F_53AA_EFBA_41CA_20201184E3ED"],"id":"overlay_5CF48051_53AA_EFC7_41C5_6DE99F677B3B"},{"enabledInCardboard":true,"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToRev00_sala_conquista_01_360"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_666F9388_6DD3_A02F_41C9_FD00BA7AC251","distance":100,"yaw":61.93,"pitch":-49.72,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"GoToRev00_sala_conquista_01_360"},"roll":-26.05,"verticalAlign":"middle","horizontalAlign":"center","hfov":10.5,"vfov":5.5}],"areas":["this.HotspotPanoramaOverlayArea_5C3791F6_53BA_70CA_41B6_9D163E35B0A8"],"id":"overlay_5CDC71F1_53BA_70C9_4183_5BB8195D5D04"},{"frameDuration":41,"frameCount":21,"colCount":4,"id":"AnimatedImageResource_666EC388_6DD3_A02F_41A8_1D00BE3701D7","levels":[{"height":330,"width":420,"url":"media/res_5C103A19_53BB_D346_41BB_AD2297EDE126_0.png","class":"ImageResourceLevel"}],"rowCount":6,"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_5C11307F_53AA_EFBA_41CA_20201184E3ED"},{"frameDuration":41,"frameCount":21,"colCount":4,"id":"AnimatedImageResource_666F9388_6DD3_A02F_41C9_FD00BA7AC251","levels":[{"height":330,"width":420,"url":"media/res_5C103A19_53BB_D346_41BB_AD2297EDE126_0.png","class":"ImageResourceLevel"}],"rowCount":6,"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_5C3791F6_53BA_70CA_41B6_9D163E35B0A8"}],"gap":10,"backgroundColorDirection":"vertical","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"name":"Player570","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt"},"width":"100%","scrollBarOpacity":0.5,"paddingTop":0,"downloadEnabled":true,"id":"rootPlayer","mouseWheelEnabled":true,"paddingLeft":0,"paddingBottom":0,"scrollBarWidth":10,"paddingRight":0,"backgroundPreloadEnabled":true,"horizontalAlign":"left","children":["this.MainViewer"],"overflow":"hidden","defaultVRPointer":"laser","vrPolyfillScale":0.75,"scrollBarColor":"#000000","mobileMipmappingEnabled":false,"contentOpaque":false,"height":"100%","toolTipHorizontalAlign":"center","backgroundColor":["#000000"],"backgroundOpacity":1,"layout":"absolute","mediaActivationMode":"window","verticalAlign":"top","scrollBarVisible":"rollOver","class":"Player","minHeight":0,"propagateClick":false,"minWidth":0,"shadow":false,"start":"this.playAudioList([this.audio_71CFD265_60A1_8221_41AD_190B6AC28A42, this.audio_40A83828_53E7_DF46_41B9_E2362F73EEC1], true); this.init()","defaultMenu":["fullscreen","mute","rotation"],"scripts":{"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"setMapLocation":TDV.Tour.Script.setMapLocation,"getKey":TDV.Tour.Script.getKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"shareSocial":TDV.Tour.Script.shareSocial,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openLink":TDV.Tour.Script.openLink,"registerKey":TDV.Tour.Script.registerKey,"clone":TDV.Tour.Script.clone,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"init":TDV.Tour.Script.init,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizStart":TDV.Tour.Script.quizStart,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"isPanorama":TDV.Tour.Script.isPanorama,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizFinish":TDV.Tour.Script.quizFinish,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setValue":TDV.Tour.Script.setValue,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"mixObject":TDV.Tour.Script.mixObject,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Mon Apr 10 2023
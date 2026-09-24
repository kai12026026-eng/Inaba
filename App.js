import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (mediaStatus.status !== 'granted') {
        console.log('Media library permission denied');
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <LinearGradient colors={['#59D4C0', '#63D7B9', '#F1A15F']} style={styles.gradient}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.brandMark}>
            <View style={styles.leafA} />
            <View style={styles.leafB} />
            <View style={styles.leafC} />
            <View style={styles.leafD} />
          </View>
          <View style={styles.brandTextWrap}>
            <Text style={styles.brandText}>AI食事診断</Text>
            <Text style={styles.brandTextBold}>コンパス</Text>
          </View>
        </View>

        <Text style={styles.title}>食事を撮るだけ！ AIがあなたの食生活をサポート</Text>

        <View style={styles.flowWrap}>
          <View style={styles.phoneCard}>
            <View style={styles.phoneFrame}>
              <View style={styles.phoneNotch} />
              <View style={styles.phoneScreen}>
                <View style={styles.photoArea}>
                  {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.photoImage} resizeMode="cover" />
                  ) : (
                    <View style={styles.mealArtwork}>
                      <View style={styles.bowlMain} />
                      <View style={styles.bowlSmall} />
                      <View style={styles.item1} />
                      <View style={styles.item2} />
                      <View style={styles.item3} />
                      <View style={styles.item4} />
                      <View style={styles.item5} />
                    </View>
                  )}
                </View>

                <Text style={styles.analysisText}>AIが解析中...</Text>

                <Pressable style={styles.cameraButton} onPress={openCamera}>
                  <Text style={styles.cameraButtonText}>◉</Text>
                </Pressable>

                <Pressable style={styles.galleryButton} onPress={pickImage}>
                  <Text style={styles.galleryButtonText}>写真を選択</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <Text style={styles.arrow}>→</Text>

          <View style={styles.analysisCard}>
            <View style={styles.analysisVisual}>
              <View style={styles.aiFace}>
                <View style={styles.aiHead}>
                  <View style={styles.eyeLeft} />
                  <View style={styles.eyeRight} />
                  <View style={styles.mouth} />
                </View>
                <View style={styles.aiBody} />
              </View>

              <View style={styles.magnifierWrap}>
                <View style={styles.magnifierCircle} />
                <View style={styles.magnifierHandle} />
              </View>

              <View style={styles.barGroup}>
                <View style={[styles.bar, { height: 52 }]} />
                <View style={[styles.bar, { height: 68 }]} />
                <View style={[styles.bar, { height: 82 }]} />
                <View style={[styles.bar, { height: 61 }]} />
                <View style={[styles.bar, { height: 90 }]} />
              </View>
            </View>

            <View style={styles.analysisBox}>
              <Text style={styles.tag}>本日の食事分析結果（夕食）</Text>

              <View style={styles.calorieRow}>
                <Text style={styles.calorieLabel}>推定カロリー：</Text>
                <Text style={styles.calorieValue}>650 kcal</Text>
              </View>

              <View style={styles.pfcRow}>
                <View style={[styles.pfcItem, styles.protein]}>
                  <Text style={styles.pfcLabel}>P</Text>
                  <Text style={styles.pfcValue}>30%</Text>
                </View>
                <View style={[styles.pfcItem, styles.fat]}>
                  <Text style={styles.pfcLabel}>F</Text>
                  <Text style={styles.pfcValue}>50%</Text>
                </View>
                <View style={[styles.pfcItem, styles.carb]}>
                  <Text style={styles.pfcLabel}>C</Text>
                  <Text style={styles.pfcValue}>70%</Text>
                </View>
              </View>

              <View style={styles.radarBox}>
                <View style={styles.radarChart}>
                  <View style={[styles.radarDot, styles.dotA]} />
                  <View style={[styles.radarDot, styles.dotB]} />
                  <View style={[styles.radarDot, styles.dotC]} />
                  <View style={[styles.radarDot, styles.dotD]} />
                  <View style={[styles.radarDot, styles.dotE]} />
                </View>

                <View style={styles.legendWrap}>
                  <View style={styles.legendItem}><View style={[styles.legendKey, styles.keyGreen]} /><Text>たんぱく質</Text></View>
                  <View style={styles.legendItem}><View style={[styles.legendKey, styles.keyOrange]} /><Text>食物繊維</Text></View>
                  <View style={styles.legendItem}><View style={[styles.legendKey, styles.keyYellow]} /><Text>塩分</Text></View>
                  <View style={styles.legendItem}><View style={[styles.legendKey, styles.keyPurple]} /><Text>鉄分</Text></View>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.arrow}>→</Text>

          <View style={styles.adviceCard}>
            <View style={styles.advicePortrait}>
              <View style={styles.portraitRing} />
              <View style={styles.portraitFace}>
                <View style={styles.portraitHead} />
                <View style={styles.portraitHair} />
                <View style={styles.portraitSmile} />
              </View>
            </View>

            <View style={styles.bubble}>
              <Text style={styles.bubbleText}>
                {'素晴らしいバランスです!\nでも、ビタミンAが少し足り\nません。\nタンパク質はほうれん草の和え物を\nプラスしてみましょう!\n明日も頑張りましょう!'}
              </Text>
            </View>

            <View style={styles.menuBar}>
              <View style={[styles.tab, styles.tabActive]}><Text style={styles.tabText}>ホーム</Text></View>
              <View style={styles.tab}><Text style={styles.tabText}>履歴</Text></View>
              <View style={styles.tab}><Text style={styles.tabText}>アドバイス</Text></View>
              <View style={styles.tab}><Text style={styles.tabText}>設定</Text></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { paddingHorizontal: 18, paddingTop: 32, paddingBottom: 28 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  brandMark: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  leafA: { position: 'absolute', width: 30, height: 34, backgroundColor: '#FFFFFF', left: 14, top: 15, transform: [{ rotate: '-30deg' }] },
  leafB: { position: 'absolute', width: 30, height: 34, backgroundColor: '#FFFFFF', right: 12, top: 18, transform: [{ rotate: '30deg' }] },
  leafC: { position: 'absolute', width: 30, height: 34, backgroundColor: '#FFFFFF', left: 17, bottom: 15, transform: [{ rotate: '25deg' }] },
  leafD: { position: 'absolute', width: 30, height: 34, backgroundColor: '#FFFFFF', right: 17, bottom: 16, transform: [{ rotate: '-25deg' }] },
  brandTextWrap: { alignItems: 'flex-start' },
  brandText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  brandTextBold: { color: '#FFFFFF', fontSize: 36, fontWeight: '800' },
  title: { fontSize: 22, lineHeight: 30, fontWeight: '800', color: '#191B1D', textAlign: 'center', marginTop: 18, marginBottom: 20, paddingHorizontal: 18 },
  flowWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 12 },
  phoneCard: {
    width: 290,
    minHeight: 520,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 14,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.45)',
  },
  phoneFrame: {
    minHeight: 490,
    borderRadius: 24,
    backgroundColor: '#E8EFF0',
    borderWidth: 4,
    borderColor: '#101214',
    overflow: 'hidden',
    position: 'relative',
  },
  phoneNotch: { position: 'absolute', top: 10, left: '50%', width: 80, height: 14, borderRadius: 12, backgroundColor: '#15191A', transform: [{ translateX: -40 }], zIndex: 3 },
  phoneScreen: { position: 'absolute', left: 10, right: 10, top: 20, bottom: 10, backgroundColor: '#F5F2ED', borderRadius: 16, overflow: 'hidden' },
  photoArea: { position: 'absolute', left: 14, right: 14, top: 16, bottom: 76, borderRadius: 14, backgroundColor: '#D5E8C8', overflow: 'hidden' },
  mealArtwork: { flex: 1, backgroundColor: 'rgba(141, 170, 102, 0.2)' },
  bowlMain: { position: 'absolute', left: 42, right: 42, top: 80, height: 120, borderRadius: 60, backgroundColor: '#E0D5B7', borderWidth: 8, borderColor: 'rgba(255,255,255,0.24)' },
  bowlSmall: { position: 'absolute', left: 70, right: 70, bottom: 42, height: 70, borderRadius: 40, backgroundColor: '#E5E0BE', borderWidth: 8, borderColor: 'rgba(255,255,255,0.18)' },
  item1: { position: 'absolute', left: 22, top: 120, width: 52, height: 52, borderRadius: 26, backgroundColor: '#E7C85E' },
  item2: { position: 'absolute', right: 28, top: 130, width: 46, height: 46, borderRadius: 23, backgroundColor: '#D19350' },
  item3: { position: 'absolute', left: 78, bottom: 78, width: 44, height: 44, borderRadius: 22, backgroundColor: '#72A55F' },
  item4: { position: 'absolute', right: 82, bottom: 72, width: 52, height: 52, borderRadius: 26, backgroundColor: '#E6AF59' },
  item5: { position: 'absolute', left: 156, bottom: 72, width: 38, height: 38, borderRadius: 19, backgroundColor: '#7CB856' },
  photoImage: { width: '100%', height: '100%' },
  analysisText: { position: 'absolute', left: 0, right: 0, bottom: 48, textAlign: 'center', fontSize: 15, fontWeight: '600', color: '#2A2A2A' },
  cameraButton: { position: 'absolute', left: '50%', bottom: 12, width: 54, height: 54, borderRadius: 27, backgroundColor: '#EAF1F4', marginLeft: -27, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'rgba(29,40,43,0.14)', elevation: 4, shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  cameraButtonText: { fontSize: 28, color: '#63777D' },
  galleryButton: { position: 'absolute', bottom: 76, right: 12, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 16, paddingHorizontal: 10, paddingVertical: 8 },
  galleryButtonText: { color: '#2A5561', fontWeight: '700', fontSize: 11 },
  arrow: { fontSize: 30, color: 'rgba(255,255,255,0.96)', marginVertical: 8, textAlign: 'center', fontWeight: '700' },
  analysisCard: { width: 320, borderRadius: 26, backgroundColor: 'rgba(255,255,255,0.2)', borderWidth: 2, borderColor: 'rgba(255,255,255,0.45)', padding: 16 },
  analysisVisual: { height: 150, position: 'relative' },
  aiFace: { position: 'absolute', left: 12, top: 18 },
  aiHead: { width: 96, height: 78, backgroundColor: '#CFDFEA', borderRadius: 28, position: 'relative' },
  eyeLeft: { position: 'absolute', left: 24, top: 26, width: 10, height: 10, borderRadius: 5, backgroundColor: '#1E2C2A' },
  eyeRight: { position: 'absolute', right: 24, top: 26, width: 10, height: 10, borderRadius: 5, backgroundColor: '#1E2C2A' },
  mouth: { position: 'absolute', left: '50%', bottom: 14, width: 28, height: 10, marginLeft: -14, borderBottomWidth: 4, borderBottomColor: '#596B73', borderRadius: 16 },
  aiBody: { width: 98, height: 38, marginTop: 4, backgroundColor: '#D5E0E6', borderRadius: 16 },
  magnifierWrap: { position: 'absolute', right: 10, top: 12, width: 120, height: 120 },
  magnifierCircle: { position: 'absolute', right: 0, top: 0, width: 100, height: 100, borderRadius: 50, borderWidth: 8, borderColor: '#DBEAFF' },
  magnifierHandle: { position: 'absolute', right: 2, bottom: 5, width: 18, height: 64, borderRadius: 12, backgroundColor: '#5A7B82', transform: [{ rotate: '42deg' }] },
  barGroup: { position: 'absolute', left: 62, bottom: 10, flexDirection: 'row', alignItems: 'flex-end', gap: 6 },
  bar: { width: 18, borderRadius: 10, backgroundColor: '#79C961' },
  analysisBox: { marginTop: 8, backgroundColor: 'rgba(255,255,255,0.34)', borderRadius: 18, padding: 14, borderWidth: 1, borderColor: 'rgba(127,144,136,0.18)' },
  tag: { backgroundColor: '#F2CF5F', paddingHorizontal: 12, paddingVertical: 7, borderRadius: 999, fontSize: 11, fontWeight: '700', alignSelf: 'center', color: '#1E2726' },
  calorieRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16, gap: 6 },
  calorieLabel: { fontSize: 13, color: '#303A38', fontWeight: '600' },
  calorieValue: { fontSize: 18, fontWeight: '800', color: '#1D2323' },
  pfcRow: { flexDirection: 'row', gap: 8, marginTop: 18 },
  pfcItem: { flex: 1, minHeight: 64, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  protein: { backgroundColor: '#67D0C1' },
  fat: { backgroundColor: '#98CC5D' },
  carb: { backgroundColor: '#F7BE5C' },
  pfcLabel: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
  pfcValue: { color: '#FFFFFF', fontSize: 22, fontWeight: '800' },
  radarBox: { marginTop: 18, flexDirection: 'row', alignItems: 'center', gap: 12 },
  radarChart: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#E2F0D8', position: 'relative' },
  radarDot: { position: 'absolute', width: 12, height: 12, borderRadius: 6, backgroundColor: '#F8F9EF' },
  dotA: { left: 52, top: 18 },
  dotB: { left: 76, top: 42 },
  dotC: { left: 46, top: 80 },
  dotD: { left: 18, top: 54 },
  dotE: { left: 82, top: 82 },
  legendWrap: { flex: 1, gap: 8 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendKey: { width: 10, height: 10, borderRadius: 5 },
  keyGreen: { backgroundColor: '#54B9A6' },
  keyOrange: { backgroundColor: '#F0A25B' },
  keyYellow: { backgroundColor: '#E0C553' },
  keyPurple: { backgroundColor: '#7B78D3' },
  adviceCard: { width: 305, borderRadius: 26, backgroundColor: 'rgba(255,255,255,0.18)', padding: 16, borderWidth: 2, borderColor: 'rgba(255,255,255,0.45)' },
  advicePortrait: { width: 118, height: 118, alignSelf: 'center', marginTop: 4, marginBottom: 14 },
  portraitRing: { position: 'absolute', inset: 0, borderRadius: 59, borderWidth: 6, borderColor: 'rgba(111, 196, 188, 0.8)' },
  portraitFace: { position: 'absolute', inset: 16, borderRadius: 50, backgroundColor: '#F6D9A7', overflow: 'hidden' },
  portraitHead: { position: 'absolute', left: '50%', top: 30, width: 34, height: 30, marginLeft: -17, borderRadius: 15, backgroundColor: '#F9D9A8' },
  portraitHair: { position: 'absolute', left: '50%', top: 18, width: 52, height: 24, marginLeft: -26, backgroundColor: '#4F3C2A', borderRadius: 20 },
  portraitSmile: { position: 'absolute', left: '50%', bottom: 18, width: 24, height: 14, marginLeft: -12, borderBottomWidth: 4, borderBottomColor: '#433428', borderRadius: 16 },
  bubble: { backgroundColor: 'rgba(255,255,255,0.72)', borderRadius: 22, padding: 18, borderWidth: 1, borderColor: 'rgba(116,130,126,0.22)' },
  bubbleText: { lineHeight: 24, fontSize: 15, fontWeight: '700', color: '#222' },
  menuBar: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, gap: 6 },
  tab: { flex: 1, backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: 14, paddingVertical: 10, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(95,105,104,0.12)' },
  tabActive: { backgroundColor: 'rgba(255,255,255,0.7)' },
  tabText: { fontSize: 10, fontWeight: '700', color: '#2C3738' },
});


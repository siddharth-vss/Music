// import { TracksList } from '@/components/TracksList'
import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { generateTracksListId } from '@/helpers/miscellaneous'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useTracks } from '@/store/library'
import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { ScrollView, View } from 'react-native'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	const tracks = useTracks()

	const filteredTracks = useMemo(() => {
		if (!search) return tracks

		return tracks.filter(trackTitleFilter(search))
	}, [search, tracks])
// 	const ONE_SECOND_IN_MS = 500;

//   const PATTERN = [
//     1 * ONE_SECOND_IN_MS,
//     2 * ONE_SECOND_IN_MS,
//     3 * ONE_SECOND_IN_MS,
//   ];

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal, height: '80%', marginTop: '40%' }}
			>

				{/* <TouchableOpacity>
					<View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>
						<Text onPress={() => Vibration.vibrate(PATTERN,true)}>Vibrate</Text>
					</View>
				</TouchableOpacity> */}
				<TracksList
					id={generateTracksListId('songs', search)}
					tracks={filteredTracks}
					scrollEnabled={false}
				/>
			</ScrollView>
		</View>
	)
}

export default SongsScreen

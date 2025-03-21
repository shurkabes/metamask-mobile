import React from 'react';
import { StyleSheet } from 'react-native';
import DefaultTabBar from 'react-native-scrollable-tab-view/DefaultTabBar';
import { fontStyles } from '../../styles/common';
import { useAppThemeFromContext, mockTheme } from '../../util/theme';

const createStyles = (colors) =>
	StyleSheet.create({
		tabUnderlineStyle: {
			height: 2,
			backgroundColor: colors.primary.default,
		},
		tabStyle: {
			paddingVertical: 8,
		},
		textStyle: {
			...fontStyles.normal,
			fontSize: 14,
		},
	});

function TabBar({ ...props }) {
	const { colors } = useAppThemeFromContext() || mockTheme;
	const styles = createStyles(colors);

	return (
		<DefaultTabBar
			underlineStyle={styles.tabUnderlineStyle}
			activeTextColor={colors.primary.default}
			inactiveTextColor={colors.text.muted}
			backgroundColor={colors.background.default}
			tabStyle={styles.tabStyle}
			textStyle={styles.textStyle}
			{...props}
		/>
	);
}

export default TabBar;

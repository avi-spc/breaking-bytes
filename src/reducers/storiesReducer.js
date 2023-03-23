export const storiesReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [...state, action.id];
		case 'REMOVE_FAVORITE':
			return state.filter((storyId) => storyId !== action.id);
		default:
			return state;
	}
};

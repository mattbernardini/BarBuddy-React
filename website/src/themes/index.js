import getMuiTheme from 'material-ui/styles/getMuiTheme'
import LightTheme from './LightTheme'
import CustomTheme from './CustomTheme'
// Overwriting the default theme with the custom theme for each school

const themeDefault = getMuiTheme(LightTheme, CustomTheme)

export default themeDefault

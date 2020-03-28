import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  listRoot: {
    position: 'absolute',
    width: '48ch',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    zIndex: 0
  },
  mapRoot: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1
  },
  askList: {
    maxHeight: '100%',
    overflow: 'auto'
  }
}));
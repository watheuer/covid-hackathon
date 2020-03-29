import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    width: '100%',
    top: '48px',
    height: 'calc(100% - 48px)',
  },
  listRoot: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '32ch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    zIndex: 0
  },
  mapRoot: {
    position: 'absolute',
    top: 0,
    left: 400,
    height: '100%',
    width: '75%',
    zIndex: 1
  },
  askList: {
    maxHeight: '100%',
    overflow: 'auto'
  }
}));
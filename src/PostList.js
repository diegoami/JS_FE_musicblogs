import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
});

function PostList(props) {
    const { classes } = props;

    return (
        <List className={classes.root} subheader={<li />}>
            { this.props.posts.map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                </ListItem>
            ))}
        </List>
    );
}

PinnedSubheaderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostList);

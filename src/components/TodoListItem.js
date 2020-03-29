import React, { memo } from 'react';

import {
    List,
    ListItem,
    Checkbox,
    IconButton,
    ListItemText,
    ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import CreateOutlined from '@material-ui/icons/CreateOutlined';

const TodoListItem = memo(props => (
    <ListItem divider={props.divider}>
        <Checkbox
            onClick={props.onCheckBoxToggle}
            checked={props.checked}
            disableRipple
        />
        <ListItemText primary={props.text} secondary={props.completed == true ? 'completed' : 'Not completed'} />

        <ListItemSecondaryAction>

            {props.completed == false ?
                <IconButton aria-label="Update Todo" onClick={props.onupdate}>
                    <CreateOutlined />
                </IconButton>
                : ''}
            <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
                <DeleteOutlined />
            </IconButton>
            <IconButton aria-label="Mark as complete" onClick={props.oncomplete}>
                {props.completed == true ? <p>Mark as not completed</p> : <p>Mark as completed</p>}
            </IconButton>

        </ListItemSecondaryAction>

    </ListItem>
));

export default TodoListItem;
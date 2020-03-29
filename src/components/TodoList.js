import React, { memo } from 'react';
import { List, Paper, Grid } from '@material-ui/core';

import TodoListItem from './TodoListItem';

const TodoList = memo(props => (
    <>
        {props.items.length > 0 && (
            <Paper style={{ margin: 16 }}>
                <List style={{ overflow: 'scroll' }}>
                    {props.items.map((todo, idx) => {
                        // if (!todo.completed)
                        return (
                            <TodoListItem
                                {...todo}
                                key={`TodoItem.${idx}`}
                                completed={todo.completed}
                                divider={idx !== props.items.length - 1}
                                onButtonClick={() => props.onItemRemove(idx)}
                                onCheckBoxToggle={() => props.onItemCheck(idx)}
                                oncomplete={() => props.oncomplete(idx)}
                                onupdate={() => props.onupdate(idx)}
                                completed={todo.completed}
                            />
                        )
                    })}
                </List>
            </Paper>
        )}
    </>
));

export default TodoList;

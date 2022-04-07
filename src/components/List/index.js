import { Pagination } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '../../containers/Card';
import './styles.scss';

function List({data, countToShow, page, handlePagination}) {
    if (!data) {
        return <div>No data</div>;
    }
    const { results, count } = data;
    return <>
        <Grid container spacing={2}>
            {results.map(({name,url}) => <Grid item xs={12} md={3} key={url}>
                <Card name={name} url={url} />
            </Grid>)}
        </Grid>
        <Pagination
            count={Math.ceil(count/countToShow)}
            variant="outlined"
            color="error"
            size={window.innerWidth <= 768 ? 'small' : 'large'}
            onChange={handlePagination}
            page={page}
            classes={{root:"paginationContainer"}}
        />
    </>
}

export default List;
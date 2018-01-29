import dva from 'dva';
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
    ...createLoading({
        effects: true
    }),
    history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

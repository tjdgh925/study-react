import useReactRouter from 'use-react-router';

function RouterHookSample() {
    const { history, loaction, match } = useReactRouter;
    console.log({ history, loaction, match });
    return null;
}

export default RouterHookSample;
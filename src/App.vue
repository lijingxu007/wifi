<template>
    <div id="app">
        <headers></headers>
        <contents></contents>
        <footers></footers>
    </div>
</template>
<script>
    import Headers from './components/headers'
    import Contents from './components/contents'
    import Footers from './components/footers'
    export default {
        name: 'app',
        components: {
            Headers,
            Contents,
            Footers
        }
    }
</script>
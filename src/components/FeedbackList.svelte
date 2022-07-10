<script>
    // import {onDestroy} from 'svelte'
    import { FeedbackStore } from '../stores';
    import { fade, scale } from 'svelte/transition'
    import FeedbackItem from "./FeedbackItem.svelte";
    // let feedback = []

    // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

    // onDestroy(() => {
    //     unsubscribe()
    // })
</script>


{#each $FeedbackStore as fp (fp.id)}
    <div in:scale out:fade="{{ duration: 500}}">
        <FeedbackItem item={fp} />
    </div>
{/each}

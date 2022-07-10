import  { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
      id: 1,
      rating: 10,
      text: 'Super text'
    },
    {
      id: 2,
      rating: 5,
      text: 'Sper text'
    },
    {
      id: 3,
      rating: 9,
      text: 'Super text 5'
    }
  ])
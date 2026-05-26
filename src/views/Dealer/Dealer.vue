<script setup lang="ts">
import Button from '@/components/Button.vue';
import { getShuffledDecks } from '@/utils/deckUtils';
import { computed, ref } from 'vue';
import BonusDisplay from './BonusDisplay.vue';

const round = ref(0);

const decks = ref(getShuffledDecks());

const handleNextRound = () => {
  round.value++;
};

const handlePrevRound = () => {
  round.value--;
};

const handleReshuffleDeck = () => {
  decks.value = getShuffledDecks();
  round.value = 0;
};

const isNextAvailable = computed(() => round.value < 26);
const isPrevAvailable = computed(() => round.value > 0);
</script>

<template>
  <div class="controls">
    <Button @click="handleNextRound" :disabled="!isNextAvailable">Next Round</Button>
    <Button @click="handlePrevRound" :disabled="!isPrevAvailable">Previous Round</Button>
    <Button @click="handleReshuffleDeck">Reshuffle Cards</Button>
  </div>
  <div class="display">
    <span>Round No. {{ round }}</span>
    <div>
      <div class="deck-display" v-for="deck in decks">
        <BonusDisplay :bonus="deck[round - 1]?.bonus ?? null" size="big" />
        <span class="number">{{ deck[round]?.number ?? '--' }}</span>
        <BonusDisplay :bonus="deck[round]?.bonus ?? null" size="small" />
      </div>
    </div>
  </div>
</template>
\
<style lang="css" scoped>
.number {
  font-size: 80px;
}
.deck-display {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 220px;
}
</style>

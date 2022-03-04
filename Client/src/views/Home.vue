<template>
  <div class="container">
    <header class="jumbotron">
      <!-- <h3>{{content}}</h3> -->
      
      <div class="card">

        <div class="input-item">
          <label for="">Name:</label>
          <input type="text" v-model="workout.name">
        </div>

        <div class="input-item">
          <label for="">BodyPart:</label>
          <select name="" id="" v-model="workout.bodypart">
            <option value="abdominals">abdominals</option>
            <option value="arms">arms</option>
            <option value="back">back</option>
            <option value="biceps">biceps</option>
            <option value="triceps">triceps</option>
            <option value="chest">chest</option>
            <option value="legs">legs</option>
            <option value="shoulders">shoulders</option>
          </select>
        </div>
        
        <div class="input-item">
          <label for="">Weight:</label>
          <input type="text" v-model="workout.weight">
        </div>
        
        <div class="input-item">
          <label for="">Reps:</label>
          <input type="text" v-model="workout.reps">
        </div>
        
        <div class="input-item">
          <label for="">Notes:</label>
          <input type="text" v-model="workout.notes">
        </div>

        <select name="" id="">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <div>
          <button @click="subtractReps">-</button>
          <input type="number" v-model="workout.reps" @blur="blurReps" >
          <button @click="addReps">+</button>
        </div>
        <button @click="addWorkout">Submit</button>
      </div>

    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: '',
      workout: {
        name: null,
        bodypart: 'abdominals',
        weight: null,
        reps: 0,
        notes: '',
        date: null
      }
    };
  },
  methods: {
    blurReps() {
      this.workout.reps = parseInt(this.workout.reps);
      console.log(this.workout.reps);
    },
    addReps() {
      this.workout.reps = parseInt(this.workout.reps) + 1;
    },
    subtractReps() {
      if(this.workout.reps > 0) {
        this.workout.reps = parseInt(this.workout.reps) - 1;
      }
    },
    addWorkout() {

      const workout = {
        name: this.name,
        bodypart: this.bodypart,
        weight: this.weight,
        reps: this.reps,
        notes: this.notes,
        date: new Date()
      }

      return this.$store.dispatch('workout/addWorkout', workout)
      .then((res) => {
        console.log("response:", res);
      })
    }
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style scoped>
.input-item > label {
  color: red;
  position: absolute;
  z-index: 0;
}

.input-item > input {
  background-color: transparent;
}
</style>
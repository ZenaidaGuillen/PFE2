<template>
<v-app>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="titulo"
            :rules="nameRules"
            :counter="30"
            label="Titulo"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="director"
            :rules="nameRules"
            :counter="30"
            label="Director"
            required
          ></v-text-field>
        </v-col>

        <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Clasificacion"
          outlined
        ></v-select>
      </v-col>
    
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="duracion"
            :rules="nameRules"
            label="Duracion"
            required
            suffix='Minutos'
          ></v-text-field>
        </v-col>
        
   <v-col
      cols="12"
      sm="6"
    >
      <v-date-picker
        v-model="dates"
        multiple
      ></v-date-picker>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dates"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-combobox
            v-model="dates"
            multiple
            chips
            small-chips
            label="Fecha de Estreno - Fecha de Salida"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-combobox>
        </template>
        <v-date-picker
          v-model="dates"
          multiple
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(dates)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>

     <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="itemsIdioma"
          label="Idioma"
          outlined
        ></v-select>
      </v-col>    

      <v-col
          cols="12"
          sm="6"
        >
          <v-select
            v-model="value"
            :items="itemsGenero"
            chips
            label="Genero"
            multiple
            outlined
          ></v-select>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      titulo: '',
      director: '',
      clasificacion: '',
      duracion: '',
      idioma: '',
      genero: '',
      tituloRules: [
        v => !!v || 'Titulo es requerido',
        v => v.length <= 30 || 'Titulo debe ser menor a 30 caracteres',
      ],
      items: ['A', 'B', 'C', 'AA', 'B15', 'D'],
      dates: [ ],
      menu: false,
      itemsIdioma: ['Español', 'Ingles', 'Subtitulada'],
      itemsGenero: ['Thriller', 'Drama', 'Accion', 'Animada'],
      value: [ ],
      
    }),
  }
</script>
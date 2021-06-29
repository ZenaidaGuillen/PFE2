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
            prepend-icon="mdi-format-title"
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
            prepend-icon="mdi-movie-open-star"
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
          prepend-icon="mdi-sticker-emoji"
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
            prepend-icon="mdi-clock-time-three-outline"
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
          prepend-icon="mdi-translate"
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
            prepend-icon="mdi-drama-masks"
            chips
            label="Genero"
            multiple
            outlined
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
        <v-file-input
            :rules="rulesImagen"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Subir Imagen"
            prepend-icon="mdi-camera"
            label="Imagen"
        ></v-file-input>
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
      imagen: null,
      tituloRules: [
        v => !!v || 'Titulo es requerido',
        v => v.length <= 30 || 'Titulo debe ser menor a 30 caracteres',
      ],
      items: ['A', 'B', 'C', 'AA', 'B15', 'D'],
      dates: [ ],
      menu: false,
      itemsIdioma: ['Español', 'Ingles', 'Subtitulada'],
      itemsGenero: ['Thriller', 'Drama', 'Accion', 'Animada', 'Horror'],
      value: [ ],
      rulesImagen: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    }),
  }
</script>


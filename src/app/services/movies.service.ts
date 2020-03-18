import { Injectable } from '@angular/core';
import { peliculasModel } from '../models/peliculas.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { 
  }

  private peliculas: peliculasModel[] = [
    {
      "title": "La Hora de la Muerte",
      "img": "assets/main/img/movies/shared/1.jpg",
      "des": "Una joven enfermera descarga accidentalmente la aplicación “Countdown” la cual predice con exactitud la fecha y hora de la muerte de los usuarios. Ella tratará desesperadamente de burlar al destino antes de que su cuenta regresiva llegue a cero en los próximos dos días. Con la actuación de #ElizabethLail",
      "reparto" : "Talitha Eliana Bateman, Elizabeth Lail, Peter Gacinelli, Jordan Callowat, Jordan Calloway",
      "clasificacion": "Mayores de 12 años",
    },
    {
      "title": "Unidos",
      "img": "assets/main/img/movies/shared/2.jpg",
      "des": "Ambientada en un mundo suburbano de fantasía, UNIDOS, de Disney y Pixar, nos presenta a dos hermanos elfos adolescentes (voces en inglés de Chris Pratt y Tom Holland) que se embarcan en una extraordinaria aventura para descubrir si aún queda un poco de magia allí afuera. La nueva película original de Pixar Animation Studios es dirigida por Dan Scanlon y producida por Kori Rae, el equipo detrás de MONSTERS UNIVERSITY. UNIDOS llegará a los cines de Latinoamérica a partir de marzo de 2020.",
      "reparto" : "Tom Holland, Chris Pratt, Octavia Spencer, Julia Louis-Dreyfus",
      "clasificacion": "Todo público",
    },
    {
      "title": "Manicomio del Terror",
      "img": "assets/main/img/movies/shared/3.jpg",
      "des": "Cuando los experimentos médicos llegan a los límites, los tests más extremos se hacen en la isla de St. Leonard, en el Atlántico Norte, una antigua prisión reconvertida en un lugar para experimentar con los más violentos criminales. Pero cuando uno de estos experimentos sale tremendamente mal, la isla entera se contaminará de una terrible enfermedad que hará peligrar la vida de los desesperados supervivientes.",
      "reparto" : "Raymond Bethley, Meg Alexandra",
      "clasificacion": "Mayores de 15 años",
    },
    {
      "title": "El Hombre Invisible",
      "img": "assets/main/img/movies/shared/5.jpg",
      "des": "Lo que no puedes ver, puede hacerte daño. La ganadora del Emmy Elisabeth Moss (Us, Hulu's The Handmaid's Tale) protagoniza una aterradora historia moderna de obsesión inspirada en el clásico personaje de monstruo de Universal. Atrapada en una relación violenta y controladora con un científico rico y brillante, Cecilia Kass (Moss) escapa en la oscuridad de la noche y desaparece en la clandestinidad, con la ayuda de su hermana (Harriet Dyer, NBC's The InBetween), su amigo de la infancia (Aldis Hodge, Straight Outta Compton) y su hija adolescente (Storm Reid, Euphoria de HBO). Pero cuando el ex abusivo de Cecilia (Oliver Jackson-Cohen, The Haunting of Hill House de Netflix) se suicida y le deja una generosa porción de su vasta fortuna, Cecilia sospecha que su muerte fue un engaño. A medida que una serie de espeluznantes coincidencias se vuelven letales, amenazando la vida de aquellos a quienes ama, la cordura de Cecilia comienza a desmoronarse mientras intenta desesperadamente demostrar que está siendo cazada por alguien que nadie puede ver. Jason Blum, nuestro maestro actual del género de terror, produce The Invisible Man para Blumhouse Productions. The Invisible Man está escrita, dirigida y producida por Leigh Whannell, uno de los creadores originales de la franquicia Saw que más recientemente dirigió Upgrade and Insidious: Chapter 3. La película también es producida por Kylie du Fresne (Upgrade, The Sapphires) para Goalpost Pictures. Los productores ejecutivos son Whannell, Beatriz Sequeira, Charles Layton, Rosemary Blight, Ben Grant, Couper Samuelson y Jeanette Volturno.",
      "reparto" : "Oliver Jackson-Cohen, Storm Reid, Elisabeth Moss, Aldis Hodge, Harriet Dyer",
      "clasificacion": "Mayores de 12 años",
    },
    {
      "title": "Los Caballeros",
      "img": "assets/main/img/movies/shared/6.jpg",
      "des": "Mickey Pearson (Matthew McConaughey) es un estadounidense que ha creado un exitoso imperio criminal en Londres. Pero cuando decide venderlo al mejor postor, más de uno intentará impedir el acuerdo y tomarlo por su propia cuenta, sin importar el costo. Pronto se desata una historia llena de engaños, tiroteos, persecuciones, chantajes y sobornos en el bajo mundo del crimen, dirigida por Guy Ritchie e interpretada por un elenco estelar que incluye a Charlie Hunnam, Henry Golding, Colin Farrell y Hugh Grant.",
      "reparto" : "Matthew McConaughey, Colin Farrell, Hugh Grant, Henry Golding, Charlie Hunnam, Michelle Dockery, Jeremy Strong",
      "clasificacion": "Mayores de 15 años",
    },
    {
      "title": "Renacidos del Padre Pio",
      "img": "assets/main/img/movies/shared/7.jpg",
      "des": "Fumaba marihuana, practicaba yoga, tenía muchas relaciones con mujeres y era antisistema. Hoy, con diecinueve años cumplidos, Alfredo Pío se ha bautizado y frecuenta los sacramentos. Igual que Alan Pío McLeod. Carlos fue oficial de las SS de Hitler, pero su vida también cambió. Lo mismo que la de Ángela, a quien con veintidós años le diagnosticaron un tumor cerebral. Con sólo tres añitos, Javier llevaba un año entero ingresado en el hospital en espera de un corazón que le permitiese seguir vivo con su familia. A todos ellos el Padre Pío les cambió la vida. Veinticinco “renacidos”, en total, brindan ahora sus testimonios estremecedores por primera vez en esta película, que a buen seguro provocará en el espectador un seísmo interior de ocho puntos en la escala de Richter.",
      "reparto" : "",
      "clasificacion": "Mayores de 12 años",
    },
    {
      "title": "El Llamado Salvaje",
      "img": "assets/main/img/movies/shared/8.jpg",
      "des": "Cuenta la historia de Buck, un perro bonachón cuya vida cambia de la noche a la mañana cuando su dueño se muda de California a los exóticos paisajes de Alaska durante la Fiebre del Oro a finales del siglo XIX. Como novato de un grupo de perros de trineo (y posteriormente su líder), Buck experimenta una aventura que jamás olvidará, encontrando su lugar en el mundo y convirtiéndose así en su propio amo.",
      "reparto" : "Omar Sy, Harrison Ford, Bradley Whitford, Karen Gillan, Terry Notary, Dan Stevens, Jean Louisa Kelly",
      "clasificacion": "Mayores de 7 años",
    }
  ];

  getPeliculas(): peliculasModel[]{
    return this.peliculas;
  }

  getPelicula(idx : string){
    return this.peliculas[idx];
  }
}

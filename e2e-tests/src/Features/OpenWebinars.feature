Feature: Este archivo contiene escenarios de prueba de la web de openwebinars.
        @todo @abrir @depurar
        Scenario: abrir la web de Angular.
            Given el usuario abre la web de angular
             Then la web abierta es la correcta
             When hacemos click en la seccion FEATURES
             Then se aabre la seccion de FEATURES
             When hacemos click en la seccion RESOURCES
             Then se aabre la seccion de RESOURCES
             When hacemos click en la seccion EVENTS
             Then se aabre la seccion de EVENTS

        @todo @abrir @depurar
        Scenario Outline: abrir las distintas secciones de la web de angular
            Given el usuario abre la web de angular
             Then la web abierta es la correcta
             When abrir la seccion <seccion>
             Then se abre la seccion <seccion>

        Examples:
                  | seccion   |
                  | features  |
                  | resources |
                  | events    |

        @todo @busqueda @depurar
        Scenario Outline: realizar varias busquedas
            Given el usuario abre la web de angular
             Then la web abierta es la correcta
             When buscamos la palabra <palabra>

        Examples:
                  | palabra |
                  | johan   |
                  | desarrollo   |
                  | angular |

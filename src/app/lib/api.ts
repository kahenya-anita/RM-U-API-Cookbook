const openAPI = {
  openapi: "3.0.0",
  info: {
    title: "Rick and Morty API",
    version: "1.0.0",
    description:
      "The Rick and Morty API provides information about the Rick and Morty universe, including characters, locations, episodes, and more.",
  },
  servers: [
    {
      url: "https://rickandmortyapi.com/api",
    },
  ],
  paths: {
    rickandmorty: {
      summary: "Rick and Morty API",
      "/character": {
        get: {
          summary: "Get all characters",
          responses: {
            "200": {
              description: "A list of characters",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      info: {
                        type: "object",
                        properties: {
                          count: {
                            type: "integer",
                          },
                          pages: {
                            type: "integer",
                          },
                          next: {
                            type: "string",
                          },
                          prev: {
                            type: "string",
                          },
                        },
                      },
                      results: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/Character",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/character/{id}": {
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "The ID of the character to retrieve",
          },
        ],
        get: {
          summary: "Get a character by ID",
          responses: {
            "200": {
              description: "The requested character",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Character",
                  },
                },
              },
            },
          },
        },
      },
      "/location": {
        get: {
          summary: "Get all locations",
          responses: {
            "200": {
              description: "A list of locations",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      info: {
                        type: "object",
                        properties: {
                          count: {
                            type: "integer",
                          },
                          pages: {
                            type: "integer",
                          },
                          next: {
                            type: "string",
                          },
                          prev: {
                            type: "string",
                          },
                        },
                      },
                      results: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/Location",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/location/{id}": {
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "The ID of the location to retrieve",
          },
        ],
        get: {
          summary: "Get a location by ID",
          responses: {
            "200": {
              description: "The requested location",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Location",
                  },
                },
              },
            },
          },
        },
      },
      "/episode": {
        get: {
          summary: "Get all episodes",
          responses: {
            "200": {
              description: "A list of episodes",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      info: {
                        type: "object",
                        properties: {
                          count: {
                            type: "integer",
                          },
                          pages: {
                            type: "integer",
                          },
                          next: {
                            type: "string",
                          },
                          prev: {
                            type: "string",
                          },
                        },
                      },
                      results: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/Episode",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/episode/{id}": {
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "The ID of the episode to retrieve",
          },
        ],
        get: {
          summary: "Get an episode by ID",
          responses: {
            "200": {
              description: "The requested episode",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Episode",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Character: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          name: {
            type: "string",
          },
          status: {
            type: "string",
          },
          species: {
            type: "string",
          },
          type: {
            type: "string",
          },
          gender: {
            type: "string",
          },
          origin: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              url: {
                type: "string",
              },
            },
          },
          location: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              url: {
                type: "string",
              },
            },
          },
          image: {
            type: "string",
          },
          episode: {
            type: "array",
            items: {
              type: "string",
            },
          },
          url: {
            type: "string",
          },
          created: {
            type: "string",
          },
        },
      },
      Location: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          name: {
            type: "string",
          },
          type: {
            type: "string",
          },
          dimension: {
            type: "string",
          },
          residents: {
            type: "array",
            items: {
              type: "string",
            },
          },
          url: {
            type: "string",
          },
          created: {
            type: "string",
          },
        },
      },
      Episode: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          name: {
            type: "string",
          },
          air_date: {
            type: "string",
          },
          episode: {
            type: "string",
          },
          characters: {
            type: "array",
            items: {
              type: "string",
            },
          },
          url: {
            type: "string",
          },
          created: {
            type: "string",
          },
        },
      },
    },
  },
};
export default openAPI;

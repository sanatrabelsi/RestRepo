// src/app/models/provider.model.ts

// src/app/models/provider.model.ts

export class Provider {
    constructor(
        public name: string,       // Required
        public email: string,      // Required
        public address: string,     // Required
        public id?: number         // Optional
    ) {}
}


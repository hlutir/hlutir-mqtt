import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MosquittoDynSec } from 'node-mosquitto-dynsec';

@Injectable()
export class DynamicSecurityService extends MosquittoDynSec implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super();
    }

    async onModuleInit() {
        // TODO: Add configuration service for this.
        await this.connect({
            hostname: 'mosquitto',
            password: 'admin'
        });
    }

    async onModuleDestroy(signal?: string) {
        await this.disconnect();
    }
}

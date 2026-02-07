// botTypes.ts

// Define types and interfaces for bot functionality

type BotCommand = {
    name: string;
    description: string;
    execute: (args: string[]) => Promise<void>;
};

interface BotConfig {
    token: string;
    prefix: string;
    commands: BotCommand[];
}

interface BotStatus {
    online: boolean;
    lastActive: Date;
}

export type { BotCommand, BotConfig, BotStatus };
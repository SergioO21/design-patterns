/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */
import { COLORS } from "../helpers/colors.ts";

class Computer {
  cpu: string = "cpu - not defined";
  ram: string = "ram - not defined";
  storage: string = "storage - not defined";
  gpu?: string;

  displayConfiguration() {
    console.log(`Computer configuration:
    CPU: ${this.cpu}
    RAM: ${this.ram}
    Storage: ${this.storage}
    GPU: ${this.gpu ?? "No GPU"}
    `);
  }
}

class ComputerBuilder {
  private readonly computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
    .setCPU("Intel Core 2 Duo")
    .setRAM("4GB")
    .setStorage("256GB")
    .build();

  console.log("%c\nBasic Computer:", COLORS.green);
  basicComputer.displayConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCPU("Intel Core i9")
    .setRAM("64GB")
    .setStorage("4TB")
    .setGPU("Nvidia GeForce GTX 5090")
    .build();

  console.log("%c\nGaming Computer:", COLORS.green);
  gamingComputer.displayConfiguration();
}

main();

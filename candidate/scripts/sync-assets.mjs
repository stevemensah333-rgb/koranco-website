import { cp, mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const candidateRoot = path.resolve(scriptDirectory, "..")
const repositoryRoot = path.resolve(candidateRoot, "..")
const sourceAssets = path.join(repositoryRoot, "assets")
const publicDirectory = path.join(candidateRoot, "public")
const destinationAssets = path.join(publicDirectory, "assets")

await mkdir(publicDirectory, { recursive: true })
await cp(sourceAssets, destinationAssets, {
  recursive: true,
  force: true,
  preserveTimestamps: true,
})

console.log(`Synced preserved assets to ${path.relative(candidateRoot, destinationAssets)}`)

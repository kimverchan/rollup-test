import { defineConfig } from 'rollup'
import importRaw from 'rollup-plugin-import-raw'
import dts from 'rollup-plugin-dts'

export default defineConfig({
    input: './src/index.ts',
    output: {
        dir: 'dist',
    },
    plugins: [
        importRaw(),
        dts(),
    ]
})
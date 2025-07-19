import { defineConfig } from 'rollup'
import importRaw from 'rollup-plugin-import-raw'
import esbuild from 'rollup-plugin-esbuild-transform'
import path from 'node:path'

export default defineConfig({
    input: './src/index.ts',
    output: {
        dir: 'dist',
    },
    plugins: [
        importRaw(),
        esbuild([
            {
                loader: 'ts',
                include: /\.tsx?$/,
                tsconfig: path.join(process.cwd(), 'tsconfig.json')
            },
        ])
    ]
})
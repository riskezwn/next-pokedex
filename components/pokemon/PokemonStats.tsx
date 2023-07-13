import React, { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useTheme } from '@nextui-org/react'

interface Props {
  stats: { label: string; value: number; }[]
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: false
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
        min: 0,
        max: 255
    }
}
}

export const PokemonStats:FC<Props> = ({ stats }) => {
  const { theme } = useTheme()
  const labels = stats.map(({ label }) => label)
  const dataStats = stats.map(({ value }) => value)
  const data = {
    labels,
    datasets: [
      {
        label: 'Stats',
        data: dataStats,
        backgroundColor: [
          theme?.colors.red500.value,
          theme?.colors.yellow700.value,
          theme?.colors.yellow500.value,
          theme?.colors.blue500.value,
          theme?.colors.green500.value,
          theme?.colors.pink500.value
        ]
      }
    ]
  }
  return (
    <Bar options={options} data={data} />
  )
}

import { describe, test, expect, vi, beforeEach } from 'vitest'
import { cleanup, customRender, renderHook } from './utils/test-utils'
import App from './App'
import useTitle from './hooks/useTitle/useTitle'

describe('App', () => {
  beforeEach(() => cleanup())
  test('should render', () => {
    customRender(<App />)
  })

  test('should set the title and description using useTitle hook', () => {
    const { result } = renderHook(() => useTitle())
    expect(result.current.title).toBe('Home page')
    expect(result.current.desription).toBe('Home page of Giffy')
  })

  test('should set the title and description using useTitle hook with path /git', async () => {
    const useTitle = vi.fn().mockImplementation({
      title: 'Details gif',
      desription: 'Details of your favorite gif'
    })
    customRender(<App />)
    console.log('vi', useTitle.getMockImplementation())
    // expect(vi.m).toHaveBeenCalledTimes(1)
  })
})

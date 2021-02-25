import { faSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import './search.styles.css'
import fuse from 'fuse.js'
export default function SearchBox() {
  let input = [
    {
      title: "Old Man's War",
      author: {
        firstName: 'John',
        lastName: 'Scalzi',
      },
    },
    {
      title: 'The Lock Artist',
      author: {
        firstName: 'Steve',
        lastName: 'Hamilton',
      },
    },
    {
      title: 'HTML5',
      author: {
        firstName: 'Remy',
        lastName: 'Sharp',
      },
    },
    {
      title: 'Right Ho Jeeves',
      author: {
        firstName: 'P.D',
        lastName: 'Woodhouse',
      },
    },
    {
      title: 'The Code of the Wooster',
      author: {
        firstName: 'P.D',
        lastName: 'Woodhouse',
      },
    },
    {
      title: 'Thank You Jeeves',
      author: {
        firstName: 'P.D',
        lastName: 'Woodhouse',
      },
    },
    {
      title: 'The DaVinci Code',
      author: {
        firstName: 'Dan',
        lastName: 'Brown',
      },
    },
    {
      title: 'Angels & Demons',
      author: {
        firstName: 'Dan',
        lastName: 'Brown',
      },
    },
    {
      title: 'The Silmarillion',
      author: {
        firstName: 'J.R.R',
        lastName: 'Tolkien',
      },
    },
    {
      title: 'Syrup',
      author: {
        firstName: 'Max',
        lastName: 'Barry',
      },
    },
    {
      title: 'The Lost Symbol',
      author: {
        firstName: 'Dan',
        lastName: 'Brown',
      },
    },
    {
      title: 'The Book of Lies',
      author: {
        firstName: 'Brad',
        lastName: 'Meltzer',
      },
    },
    {
      title: 'Lamb',
      author: {
        firstName: 'Christopher',
        lastName: 'Moore',
      },
    },
    {
      title: 'Fool',
      author: {
        firstName: 'Christopher',
        lastName: 'Moore',
      },
    },
    {
      title: 'Incompetence',
      author: {
        firstName: 'Rob',
        lastName: 'Grant',
      },
    },
    {
      title: 'Fat',
      author: {
        firstName: 'Rob',
        lastName: 'Grant',
      },
    },
    {
      title: 'Colony',
      author: {
        firstName: 'Rob',
        lastName: 'Grant',
      },
    },
    {
      title: 'Backwards, Red Dwarf',
      author: {
        firstName: 'Rob',
        lastName: 'Grant',
      },
    },
    {
      title: 'The Grand Design',
      author: {
        firstName: 'Stephen',
        lastName: 'Hawking',
      },
    },
    {
      title: 'The Book of Samson',
      author: {
        firstName: 'David',
        lastName: 'Maine',
      },
    },
    {
      title: 'The Preservationist',
      author: {
        firstName: 'David',
        lastName: 'Maine',
      },
    },
    {
      title: 'Fallen',
      author: {
        firstName: 'David',
        lastName: 'Maine',
      },
    },
    {
      title: 'Monster 1959',
      author: {
        firstName: 'David',
        lastName: 'Maine',
      },
    },
  ]
  const [List, setList] = useState([])
  const [word, setword] = useState('')
  const [ss, setss] = useState(input)
  const [isfocus, setFocus] = useState(false)
  const [isMain, setMain] = useState(false)
  const options = {
    keys: ['title', 'author.firstName'],
  }
  const fusee = new fuse(ss, options)

  let removeSelected = (selectedItem) => {
    let Templist = [...List]
    Templist = Templist.filter((item) => {
      return item !== selectedItem
    })
    setList(Templist)
  }

  let renderList = () => {
    // console.log(List)
    return List.map((element) => {
      return (
        <div className='card'>
          <p>{element.title} </p>
          <div
            className='cross'
            onClick={() => {
              removeSelected(element)
            }}
          >
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 1.83398L2 12.834'
                stroke='#606060'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13 12.834L2 1.83398'
                stroke='#606060'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      )
    })
  }

  let Select = () => {
    if (isfocus && fusee.search(word).length === 0) {
      return ss.map((element) => {
        return (
          <div
            className='select'
            onClick={() => {
              addToList(element)
              setFocus(false)
            }}
          >
            <p>{element.title} </p>
          </div>
        )
      })
    } else if (fusee.search(word).length > 0) {
      console.log(fusee.search(word))

      return fusee.search(word).map((element) => {
        return (
          <div
            className='select'
            onClick={() => {
              addToList(element.item)
              setFocus(false)
            }}
          >
            <p>{element.item.title} </p>
          </div>
        )
      })
    }
    return null
  }

  let addToList = (value) => {
    if (!containsObject(value, List)) {
      let lList = [...List]
      lList.push(value)

      setList(lList)
      setword('')
    }
  }

  function containsObject(obj, list) {
    var i
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true
      }
    }

    return false
  }

  document.addEventListener(
    'click',
    function () {
      setFocus(false)
    },
    false
  )

  useEffect(() => {
    if (List.length === 0) {
      setMain(false)
    }
  }, isfocus)

  if (!isMain && List.length === 0) {
    return (
      <div
        className='box1'
        onClick={() => {
          setMain(true)
        }}
      >
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3.125 10H16.875'
            stroke='#AFAFAF'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M10 3.125V16.875'
            stroke='#AFAFAF'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <p className='light-text'>Add Tags</p>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className={List.length > 0 ? 'box' : 'box'}>
          {renderList()}

          <input
            type='text'
            autoFocus
            placeholder='Search'
            className='search-box'
            value={word}
            onChange={(e) => {
              setword(e.target.value)
            }}
            onClick={(ev) => {
              //alert("except");
              ev.stopPropagation() //this is important! If removed, you'll get both alerts
              setFocus(true)
            }}
          ></input>
        </div>
        <div className={isfocus ? 'scroll-Container show' : 'scroll-Container'}>
          {Select()}
        </div>
      </div>
    )
  }
}

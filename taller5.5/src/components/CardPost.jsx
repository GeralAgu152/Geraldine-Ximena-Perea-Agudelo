import { useState } from 'react'
import { useFetch } from '../utils/useFetch'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  MessageSquareIcon,
  ShareIcon,
  MoreHorizontalIcon,
} from 'lucide-react'
import CardComments from './CardComments'

export default function CardPost({ id, title, user, body, likes = 0, share, onDelete  }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [visibleComments, setVisibleComments] = useState(false)
  const [loading, setLoading] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [isJoined, setIsJoined] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const stylesSelected = 'bg-green-500 text-white'

  const handleComments = async (id) => {
    setVisibleComments(!visibleComments)
    setLoading(true)

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    const comments = await useFetch(url)

    setComments(comments)
    setLoading(false)
  }

  const handleLike = () => {
    setLikeCount((prevLikes) => prevLikes + 1)
  }

  const handleDislike = () => {
    setLikeCount((prevLikes) => (prevLikes > 0 ? prevLikes - 1 : 0))
  }

  const handleJoin = () => {
    setIsJoined((prev) => !prev) // Alterna el estado entre unido y no unido
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este post?')
    if (confirmDelete) {
      onDelete(id) // Llama a la función de eliminación que se pasa como prop
    }
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    if (newComment.trim() === '') return // Evita comentarios vacíos

    const comment = {
      id: comments.length + 1, // Genera un ID temporal
      name: 'Nuevo Usuario',
      email: 'usuario@example.com',
      body: newComment,
    }

    setComments((prevComments) => [...prevComments, comment])
    setNewComment('') // Limpia el campo de texto
  }

  const handleShare = () => {
    const shareableLink = `https://example.com/posts/${id}`
    navigator.clipboard.writeText(shareableLink)
      .then(() => {
        alert('Enlace copiado al portapapeles!')
      })
      .catch(err => {
        console.error('Error al copiar el enlace: ', err)
      })
  }


  return (
    <>
      <div className="flex items-start gap-2 border-b-[1px] border-[#272729] pb-2">
        <img
          src="https://styles.redditmedia.com/t5_2qrpc/styles/communityIcon_6nx5ls5qkre41.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=d4dac65dc9921ccb0770a1841c0a0472abc4ccf0"
          alt="Subreddit icon"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">{user}</span>
              <span className="text-xs text-[#818384]">• hace 2 h</span>
            </div>

            <div className="flex items-center gap-2 relative">
              <button
                onClick={handleJoin}
                className={`${
                  isJoined ? 'bg-red-500' : 'bg-[#0079D3]'
                } text-white text-xs font-bold px-4 py-1 rounded-full`}
              >
                {isJoined ? 'Retirarse' : 'Unirse'}
              </button>

              <button
                className="text-[#818384] hover:bg-[#272729] p-1 rounded"
                onClick={() => setShowOptions((prev) => !prev)}
              >
                <MoreHorizontalIcon className="w-5 h-5" />
              </button>

              {showOptions && (
                <div className="absolute top-full right-0 mt-1 bg-[#272729] border border-gray-600 rounded-md shadow-lg z-10 w-32">
                  <button
                    onClick={handleDelete}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-red-500 rounded-md"
                  >
                    Eliminar post
                  </button>
                </div>
              )}
            </div>
          </div>
          <h2 className="text-lg font-medium my-2">{title}</h2>
          <p className="text-sm mb-2">{body}</p>
          <div className="flex items-center space-x-4 text-xs text-[#818384]">
            <div className="flex items-center space-x-1 bg-[#272729] rounded-md">
              <button
                className="p-1 rounded-l-md hover:bg-[#333]"
                onClick={handleLike}
              >
                <ArrowUpIcon className="w-5 h-5" />
              </button>
              <span className="font-bold px-1">{likeCount}</span>
              <button
                className="p-1 rounded-r-md hover:bg-[#333]"
                onClick={handleDislike}
              >
                <ArrowDownIcon className="w-5 h-5" />
              </button>
            </div>
            <button
              className={`flex items-center space-x-1 px-2 py-1 rounded-md  ${
                visibleComments
                  ? stylesSelected
                  : 'bg-[#272729] hover:bg-[#333]'
              }`}
              onClick={() => handleComments(id)}
            >
              <MessageSquareIcon className="w-4 h-4" />
              <span>comentarios</span>
            </button>
            <button
              className="flex items-center space-x-1 bg-[#272729] px-2 py-1 rounded-md hover:bg-[#333]"
              onClick={handleShare}
            >
              <ShareIcon className="w-4 h-4" />
              <span>{share} Compartir</span>
            </button>
          </div>
        </div>
      </div>

      {visibleComments && (
        <section className="flex flex-col gap-2 border-[1px] border-[#272729] p-2">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            comments.map(({ id, name, email, body }) => (
              <CardComments key={id} name={name} email={email} body={body} />
            ))
          )}

          {/* Formulario para agregar un nuevo comentario */}
          <form onSubmit={handleAddComment} className="mt-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe un comentario..."
              className="w-full p-2 bg-[#272729] text-white rounded-md mb-2"
            />
            <button
              type="submit"
              className="bg-[#0079D3] text-white text-xs font-bold px-4 py-1 rounded-md"
            >
              Agregar comentario
            </button>
          </form>


        </section>
      )}
    </>
  )
}

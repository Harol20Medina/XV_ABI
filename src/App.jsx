import React, { useEffect, useRef, useState } from 'react';
import {
  Music,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Gift,
  Users,
  Sparkles,
  MessageCircle,
  Crown,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

const eventDate = new Date('2026-05-24T17:00:00');
const audioSrc = '/music.mpeg';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function update() {
      const now = Date.now();
      const distance = targetDate.getTime() - now;
      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0),
        minutes: Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0),
        seconds: Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0),
      });
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function App() {
  const audioRef = useRef(null);
  const countdown = useCountdown(eventDate);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.3;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsAudioPlaying(true);
      } catch (error) {
        console.warn('Autoplay prevented by browser');
      }
    };

    playAudio();
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsAudioPlaying(true);
      } catch (error) {
        console.error('Error al reproducir audio:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F7F4] flex justify-center p-0 sm:p-4 selection:bg-[#A8E1B5]/30 text-[#2D3A32]">
      <div className="fixed top-4 left-4 z-40 opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="#A8E1B5" />
          <circle cx="15" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="15" cy="25" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="25" r="2" fill="#A8E1B5" />
        </svg>
      </div>
      <div className="fixed top-4 right-4 z-40 opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="#A8E1B5" />
          <circle cx="15" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="15" cy="25" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="25" r="2" fill="#A8E1B5" />
        </svg>
      </div>
      <div className="fixed bottom-4 left-4 z-40 opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="#A8E1B5" />
          <circle cx="15" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="15" cy="25" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="25" r="2" fill="#A8E1B5" />
        </svg>
      </div>
      <div className="fixed bottom-4 right-4 z-40 opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="#A8E1B5" />
          <circle cx="15" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="15" r="2" fill="#A8E1B5" />
          <circle cx="15" cy="25" r="2" fill="#A8E1B5" />
          <circle cx="25" cy="25" r="2" fill="#A8E1B5" />
        </svg>
      </div>

      <div className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden min-h-screen sm:min-h-0 sm:rounded-[3rem] border border-[#A8E1B5]/20">
        <button
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-[#A8E1B5]/30 group hover:bg-[#A8E1B5] transition-all duration-500"
        >
          {isAudioPlaying ? (
            <Pause size={20} className="text-[#6BA37A] group-hover:text-white" />
          ) : (
            <Play size={20} className="text-[#6BA37A] group-hover:text-white" />
          )}
        </button>

        <header className="pt-20 pb-12 px-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
            <div className="w-full h-full border-[1px] border-[#A8E1B5] rounded-full scale-150 translate-y-[-75%]"></div>
          </div>

          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.6em] text-[#6BA37A] mb-6 font-semibold">Mis XV Años</p>
            <div className="flex justify-center mb-8">
              <Crown className="w-6 h-6 text-[#A8E1B5]" strokeWidth={1.5} />
            </div>
            <h1 className="text-6xl font-serif text-[#2D3A32] leading-tight mb-4 tracking-tighter">Abigail</h1>

            <div className="relative mx-auto mt-12 w-64 h-80">
              <div className="absolute inset-0 border-[1px] border-[#A8E1B5]/50 -m-3 rounded-t-full"></div>
              <div className="w-full h-full rounded-t-full overflow-hidden shadow-2xl grayscale-[15%] hover:grayscale-0 transition-all duration-1000">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop"
                  alt="Abigail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-14 text-[13px] font-light text-stone-500 max-w-xs mx-auto leading-relaxed italic px-4">
              "Hay momentos en la vida que se vuelven inolvidables cuando se comparten con las personas que más amamos."
            </p>
          </div>
        </header>

        <section className="px-10 py-16 bg-[#F9FBFA] text-center border-y border-[#A8E1B5]/10">
          <div className="space-y-12">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#6BA37A] mb-6 font-bold">Con la bendición de mis padres</p>
              <div className="space-y-1">
                <p className="text-xl font-serif text-[#2D3A32]">Elías Pastor Paz Suárez</p>
                <p className="text-xl font-serif text-[#2D3A32]">Ruth Victoria Zárate Landa</p>
              </div>
            </div>
            <div className="w-12 h-px bg-[#A8E1B5] mx-auto opacity-30"></div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#6BA37A] mb-6 font-bold">Y mis padrinos</p>
              <div className="space-y-1">
                <p className="text-xl font-serif text-[#2D3A32]">Freddy Gomez S.</p>
                <p className="text-xl font-serif text-[#2D3A32]">Mónica Bernal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8 text-center bg-white relative overflow-hidden">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#6BA37A] mb-12">Falta muy poco para el gran día</p>
          <div className="flex justify-between max-w-xs mx-auto">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl font-serif text-[#2D3A32] font-light">
                  {value < 10 ? `0${value}` : value}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#6BA37A]/60 mt-2 font-bold">
                  {label === 'days' ? 'Días' : label === 'hours' ? 'Horas' : label === 'minutes' ? 'Min' : 'Seg'}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-5">
            <div className="flex items-center justify-center gap-3">
              <Calendar size={18} strokeWidth={1} className="text-[#6BA37A]" />
              <span className="font-serif text-lg">Sábado 24 de Mayo, 2026</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock size={18} strokeWidth={1} className="text-[#6BA37A]" />
              <span className="font-serif text-lg">5:00 PM</span>
            </div>
          </div>
        </section>

        <section className="px-8 py-16 space-y-6 bg-[#F9FBFA]">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#A8E1B5]/20 text-center">
            <div className="inline-flex p-3 rounded-full bg-[#F2F7F4] mb-6">
              <MapPin size={24} strokeWidth={1} className="text-[#6BA37A]" />
            </div>
            <h3 className="font-serif text-2xl text-[#2D3A32] mb-4 italic">Celebración</h3>
            <p className="text-[11px] font-bold text-[#6BA37A] tracking-[0.2em] mb-2 uppercase">Asociación Santa Rosa</p>
            <p className="text-xs text-stone-400 mb-8 leading-relaxed">Jr. Las Hortensias 123, Urb. San Ignacio</p>
            <a
              href="https://maps.app.goo.gl/P7cct6BP4A2Rzjk46"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full py-4 rounded-full border border-[#A8E1B5] text-[#6BA37A] text-[10px] uppercase tracking-[0.2em] hover:bg-[#A8E1B5] hover:text-white transition-all font-bold"
            >
              Ver ubicación
            </a>
          </div>
        </section>

        <section className="px-10 py-20 text-center bg-white">
          <div className="mb-20">
            <Sparkles size={24} strokeWidth={1} className="mx-auto text-[#A8E1B5] mb-6" />
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#6BA37A] mb-4">Código de Vestimenta</h3>
            <p className="text-2xl font-serif text-[#2D3A32] mb-2">Sport Elegante</p>
            <p className="text-xs text-stone-400 italic">Será un honor verte ese día</p>
          </div>

          <div className="w-16 h-px bg-[#A8E1B5]/30 mx-auto mb-20"></div>

          <div>
            <Gift size={24} strokeWidth={1} className="mx-auto text-[#A8E1B5] mb-6" />
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#6BA37A] mb-4">Lluvia de Sobres</h3>
            <p className="text-[13px] text-stone-500 leading-relaxed max-w-[250px] mx-auto italic font-light">
              "Tu presencia es mi mayor regalo, pero si deseas obsequiarme algo, puedes hacerlo en un sobre el día del evento."
            </p>
          </div>
        </section>

        <section className="px-8 py-20 bg-[#F9FBFA] text-center">
          <div className="bg-[#A8E1B5] text-white p-12 rounded-[3.5rem] shadow-xl">
            <MessageCircle size={28} strokeWidth={1} className="mx-auto mb-6 opacity-80" />
            <h3 className="font-serif text-3xl mb-4 italic">Asistencia</h3>
            <p className="text-[9px] uppercase tracking-[0.3em] mb-10 opacity-90 font-bold">Por favor confirma antes del 10 de Mayo</p>
            <a
              href="https://wa.me/1234567890?text=Confirmo%20asistencia%20XV%20Abigail"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full py-4 bg-white text-[#6BA37A] rounded-full text-[10px] font-bold uppercase tracking-[0.15em] hover:scale-105 transition-transform shadow-md"
            >
              Confirmar por WhatsApp
            </a>
          </div>
        </section>

        <section className="px-4 py-20 bg-white">
          <h3 className="text-center font-serif text-3xl text-[#2D3A32] mb-12 italic tracking-tight">Álbum de fotos</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#A8E1B5]/20">
                <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop" alt="Foto 1" className="w-full h-64 object-cover" />
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#A8E1B5]/20">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop" alt="Foto 2" className="w-full h-40 object-cover" />
              </div>
            </div>
            <div className="space-y-3 pt-8">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#A8E1B5]/20">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop" alt="Foto 3" className="w-full h-40 object-cover" />
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#A8E1B5]/20">
                <img src="https://images.unsplash.com/photo-1532710093739-947cb6cc4611?q=80&w=400&auto=format&fit=crop" alt="Foto 4" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
          <div className="text-center mt-20 flex flex-col items-center">
            <div className="w-10 h-[1px] bg-[#A8E1B5] mb-6"></div>
            <p className="font-serif text-4xl text-[#A8E1B5] italic">Abigail</p>
          </div>
        </section>

        <audio ref={audioRef} src={audioSrc} loop preload="auto" className="hidden" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        body {
          font-family: 'Playfair Display', serif;
          background-color: #F2F7F4;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </div>
  );
}
